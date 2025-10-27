import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { AvatarService } from '../services/avatar.service';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-trip-summary',
  templateUrl: './trip-summary.component.html',
  styleUrls: ['./trip-summary.component.scss'],
})
export class TripSummaryComponent implements OnInit {
  @Input() tripData: any;
  @Input() requestId: string;
  
  rating: number = 0;
  comment: string = '';
  tripDate: Date = new Date();
  mapImageUrl: string = '';
  
  // Add properties to store formatted distance and duration
  formattedDistance: string = '';
  formattedDuration: string = '';
  formattedPrice: string = '';

  constructor(
    private modalCtrl: ModalController,
    private firestore: Firestore,
    private avatarService: AvatarService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    console.log('Trip Summary - Request ID:', this.requestId);
    console.log('Trip Summary - Trip Data:', this.tripData);
    
    // Generate a static map image URL based on trip coordinates
    if (this.tripData && this.tripData.Loc_lat && this.tripData.Loc_lng && 
        this.tripData.Des_lat && this.tripData.Des_lng) {
      this.generateMapImageUrl();
      
      // Format the trip details
      this.formatTripDetails();
    }
  }

  formatTripDetails() {
    // Format distance
    if (this.tripData.distance) {
      this.formattedDistance = typeof this.tripData.distance === 'string' 
        ? this.tripData.distance 
        : `${(this.tripData.distance / 1000).toFixed(2)} km`;
    }
    
    // Format duration
    if (this.tripData.duration) {
      this.formattedDuration = typeof this.tripData.duration === 'string'
        ? this.tripData.duration
        : `${Math.floor(this.tripData.duration / 60)} mins`;
    }
    
    // Format price
    if (this.tripData.price) {
      this.formattedPrice = `$${this.tripData.price.toFixed(2)}`;
    }
  }

  generateMapImageUrl() {
    // Create a Google Static Maps URL with the route
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual API key
    const origin = `${this.tripData.Loc_lat},${this.tripData.Loc_lng}`;
    const destination = `${this.tripData.Des_lat},${this.tripData.Des_lng}`;
    
    this.mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x300&markers=color:green|label:A|${origin}&markers=color:red|label:B|${destination}&path=color:0x0000ff|weight:5|${origin}|${destination}&key=${apiKey}`;
  }

  setRating(value: number) {
    this.rating = value;
  }

  async submitRating() {
    try {
      if (!this.rating) {
        const toast = await this.toastController.create({
          message: 'Please select a rating before submitting',
          duration: 2000,
          color: 'warning'
        });
        await toast.present();
        return;
      }

      // Check if requestId exists, with better logging
      if (!this.requestId) {
        console.error('Missing requestId in trip summary. Available data:', {
          tripData: this.tripData,
          requestIdProperty: this.requestId
        });
        
        // Try to get requestId from tripData as fallback
        if (this.tripData && this.tripData.requestId) {
          this.requestId = this.tripData.requestId;
          console.log('Found requestId in tripData:', this.requestId);
        }
      }

      // Update the request document with the rating
      if (this.requestId) {
        const requestRef = doc(this.firestore, 'Request', this.requestId);
        await updateDoc(requestRef, {
          driverRating: this.rating,
          driverComment: this.comment || '',
          ratedByDriver: true
        });

        // Also add to trip history if needed
        await this.avatarService.updateTripRating(this.requestId, this.rating, this.comment);
        
        const toast = await this.toastController.create({
          message: 'Rating submitted successfully',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
        this.dismiss();
      } else {
        // If requestId is missing, show error toast
        const toast = await this.toastController.create({
          message: 'Error: Trip ID is missing',
          duration: 2000,
          color: 'danger'
        });
        await toast.present();
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
      const toast = await this.toastController.create({
        message: 'Failed to submit rating. Please try again.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'rated': this.rating > 0
    });
  }
}
