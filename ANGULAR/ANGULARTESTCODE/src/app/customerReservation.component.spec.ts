import { customerReservation } from "./customerReservation.component";

xdescribe('Customer Reservation',()=>{

     let custService : customerReservation;

     //setup
    beforeEach(()=>{
         custService = new customerReservation;
    })

    //tear-down
    afterEach(()=>{
       //can write cleanup code after each spec
    });

    //executed only once
    beforeAll(()=>{

    });

    //executed after all unit specs are executed
    afterAll(()=>{

    });

    it('should register customer / increase the current customer count by 1',()=>{
         
         let custcount=custService.registerCustomer();
         expect(custcount).toEqual(11);
    });

    it('should unregister customer / decrease the current customer count by 1', () => {

        let custcount = custService.unregisterCustomer();
        expect(custcount).toEqual(9);
    });

});

//Testing with AAA concept
xdescribe('Room reservation',()=>{

    it('Testiing if room is reserved or not',()=>{
        //Arrange
        let custReserve=new customerReservation;
        //Act
        let isReserved=custReserve.reserveRoom();
        //Assert
        expect(isReserved).toBeTruthy();
    })
})