export class customerReservation{
    hotelRoomCapacity=30;
    customerCount=10;

    //This will increase the customer count by 1
    registerCustomer(){
        return ++this.customerCount
    }

    unregisterCustomer() {
        return --this.customerCount
    }

    reserveRoom():Boolean{
        let roomReserved=false;
        if(this.hotelRoomCapacity>this.customerCount){
            this.customerCount++;   
            roomReserved=true;       
        }
      return roomReserved;

    }

}