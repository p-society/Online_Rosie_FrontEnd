import { Component, OnInit, Inject } from '@angular/core';
import { Http , HttpModule } from '@angular/http'
import {Router} from '@angular/router'
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {AuthService} from '../../services/auth.service'
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-mess-book',
  templateUrl: './mess-book.component.html',
  styleUrls: ['./mess-book.component.css']
})
export class MessBookComponent implements OnInit {

  monBrVegNon : String;
  monLunVegNon : String;
  monDinvegNon: String;
  tuesBrVegNon: String;
  tuesLunVegNon: String;
  tuesDinVegNon: String;
  wedBrVegNon: String;
  wedLunVegNon: String;
  wedDinvegNon: String;
  thuBrVegNon: String;
  thuLunVegNon: String;
  thuDinvegNon: String;
  friBrVegNon: String;
  friLunVegNon: String
  friDinvegNon: String;
  satBrVegNon: String;
  satLunVegNon: String;
  satDinvegNon: String;
  sunBrVegNon: String;
  sunLunVegNon: String;
  sunDinvegNon: String;

  // 1st floor mess1

  monBrVegNon1 : String;
  monLunVegNon1 : String;
  monDinvegNon1: String;
  tuesBrVegNon1: String;
  tuesLunVegNon1: String;
  tuesDinVegNon1: String;
  wedBrVegNon1: String;
  wedLunVegNon1: String;
  wedDinvegNon1: String;
  thuBrVegNon1: String;
  thuLunVegNon1: String;
  thuDinvegNon1: String;
  friBrVegNon1: String;
  friLunVegNon1: String
  friDinvegNon1: String;
  satBrVegNon1: String;
  satLunVegNon1: String;
  satDinvegNon1: String;
  sunBrVegNon1: String;
  sunLunVegNon1: String;
  sunDinvegNon1: String;

  BreakFastValue: number;
  LunchValue: number;
  DinnerValue: number;
  BreakFastBody: any;

  constructor(
    private http: Http,
    private route: Router,
    public dialog: MatDialog,
    private authService: AuthService,
  ) {
   }

  ngOnInit() {

  }

  bookCoupon(){
    const arrMess1 = [];
    const arrMess2 = [];
    const breakfastMess1 = {};
    const lunchMess1 = {};
    const dinnerMess1 = {};
    const breakfastMess2 = {};
    const lunchMess2 = {};
    const dinnerMess2 = {};
    // mess 1

      arrMess1.push({
        breakfast: {
          monBrVegNon: this.monBrVegNon,
          tuesBrVegNon: this.tuesBrVegNon,
          wedBrVegNon: this.wedBrVegNon,
          thuBrVegNon: this.thuBrVegNon,
          friBrVegNon: this.friBrVegNon,
          satBrVegNon: this.satBrVegNon,
          sunBrVegNon: this.sunBrVegNon
        },
        lunch: {
          monLunVegNon: this.monLunVegNon,
          tuesLunVegNon: this.tuesLunVegNon,
          wedLunVegNon: this.wedLunVegNon,
          thuLunVegNon: this.thuLunVegNon,
          friLunVegNon: this.friLunVegNon,
          satLunVegNon: this.satLunVegNon,
          sunLunVegNon: this.sunLunVegNon
        },
        dinner: {
          monDinvegNon: this.monDinvegNon,
          tuesDinVegNon: this.tuesDinVegNon,
          wedDinvegNon: this.wedDinvegNon,
          thuDinvegNon: this.thuDinvegNon,
          friDinvegNon: this.friDinvegNon,
          satDinvegNon: this.satDinvegNon,
          sunDinvegNon: this.sunDinvegNon
        }
      });

      // mess 2
      arrMess2.push({
        breakfast: {
          monBrVegNon: this.monBrVegNon1,
          tuesBrVegNon: this.tuesBrVegNon1,
          wedBrVegNon: this.wedBrVegNon1,
          thuBrVegNon: this.thuBrVegNon1,
          friBrVegNon: this.friBrVegNon1,
          satBrVegNon: this.satBrVegNon1,
          sunBrVegNon: this.sunBrVegNon1
        },
        lunch: {
          monLunVegNon: this.monLunVegNon1,
          tuesLunVegNon: this.tuesLunVegNon1,
          wedLunVegNon: this.wedLunVegNon1,
          thuLunVegNon: this.thuLunVegNon1,
          friLunVegNon: this.friLunVegNon1,
          satLunVegNon: this.satLunVegNon1,
          sunLunVegNon: this.sunLunVegNon1
        },
        dinner: {
          monDinvegNon: this.monDinvegNon1,
          tuesDinVegNon: this.tuesDinVegNon1,
          wedDinvegNon: this.wedDinvegNon1,
          thuDinvegNon: this.thuDinvegNon1,
          friDinvegNon: this.friDinvegNon1,
          satDinvegNon: this.satDinvegNon1,
          sunDinvegNon: this.sunDinvegNon1
        }
      });

      // Mess 1 breakfast
      Object.values(arrMess1[0].breakfast).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          breakfastMess1[index] = {
            val:val,
            cost: 10
          }
        }
      });

      // Mess 1 Lunch
      Object.values(arrMess1[0].lunch).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          lunchMess1[index] = {
            val,
            cost: 25
          }
        }
      });

      // Mess 1 dinner
      Object.values(arrMess1[0].dinner).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          dinnerMess1[index] = {
            val,
            cost: 25
          }
        }
      });

      // Mess 2 breakfast
      Object.values(arrMess2[0].breakfast).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          breakfastMess2[index] = {
            val,
            cost: 10
          }
        }
      });

      // Mess 2 Lunch
      Object.values(arrMess2[0].lunch).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          lunchMess2[index] = {
            val,
            cost: 25
          }
        }
      });

      // Mess 2 dinner
      Object.values(arrMess2[0].dinner).forEach((val, index: any)=>{
        if(val !== undefined) {
          switch (index){
            case 0:
              index = "Monday"
              break;
            case 1:
              index = "Tuesday"
              break;
            case 2:
              index = "Wednesday"
              break;
            case 3:
              index = "Thursday"
              break;
            case 4:
              index = "Friday"
              break;
            case 5:
              index = "Saturday"
              break;
            case 6:
              index = "Sunday"
              break;
          }
          dinnerMess2[index] = {
            val,
            cost: 25
          }
        }
      });

      // Sending data to backend
      var body = {
        mess1: {
          breakfastMess1: breakfastMess1,
          lunchMess1: lunchMess1,
          dinnerMess1: dinnerMess1,
        },
        mess2: {
          breakfastMess2: breakfastMess2,
          lunchMess2: lunchMess2,
          dinnerMess2: dinnerMess2,
        }
    }

    let dialogRef = this.dialog.open(DialogComponent, {
      width: '900px',
      data: body
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      if(result) {
        console.log("fuck")
      }
    });

  }
}

export interface MessElement {
  day: string;
  breakfast: any;
  lunch: any;
  dinner: any;
  cost: any;
}


@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog-component.html',
  styleUrls: ['dialog-component.css']
})
export class DialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ELEMENT_DATA1: MessElement[] = [
      { day: 'Monday',
        breakfast: this.data.mess1.breakfastMess1.Monday ? this.data.mess1.breakfastMess1.Monday.val : "N/A",
        lunch: this.data.mess1.lunchMess1.Monday ? this.data.mess1.lunchMess1.Monday.val : "N/A",
        dinner: this.data.mess1.dinnerMess1.Monday ? this.data.mess1.dinnerMess1.Monday.val : "N/A",
        cost: this.checkCost(this.data.mess1.breakfastMess1.Monday, this.data.mess1.lunchMess1.Monday, this.data.mess1.dinnerMess1.Monday)
     },
     { day: 'Tuesday',
       breakfast: this.data.mess1.breakfastMess1.Tuesday ? this.data.mess1.breakfastMess1.Tuesday.val : "N/A",
       lunch: this.data.mess1.lunchMess1.Tuesday ? this.data.mess1.lunchMess1.Tuesday.val : "N/A",
       dinner: this.data.mess1.dinnerMess1.Tuesday ? this.data.mess1.dinnerMess1.Tuesday.val : "N/A",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Tuesday, this.data.mess1.lunchMess1.Tuesday, this.data.mess1.dinnerMess1.Tuesday)
     },
     { day: 'Wednesday',
       breakfast: this.data.mess1.breakfastMess1.Wednesday ? this.data.mess1.breakfastMess1.Wednesday.val : "N/A",
       lunch: this.data.mess1.lunchMess1.Wednesday ? this.data.mess1.lunchMess1.Wednesday.val : "N/A",
       dinner: this.data.mess1.dinnerMess1.Wednesday ? this.data.mess1.dinnerMess1.Wednesday.val : "N/A",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Wednesday, this.data.mess1.lunchMess1.Wednesday, this.data.mess1.dinnerMess1.Wednesday)
     },
     { day: 'Thursday',
       breakfast: this.data.mess1.breakfastMess1.Thursday ? this.data.mess1.breakfastMess1.Thursday.val : "N/A",
       lunch: this.data.mess1.lunchMess1.Thursday ? this.data.mess1.lunchMess1.Thursday.val : "N/A",
       dinner: this.data.mess1.dinnerMess1.Thursday ? this.data.mess1.dinnerMess1.Thursday.val : "N/A",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Thursday, this.data.mess1.lunchMess1.Thursday, this.data.mess1.dinnerMess1.Thursday)
     },
     { day: 'Friday',
       breakfast: this.data.mess1.breakfastMess1.Friday ? this.data.mess1.breakfastMess1.Friday.val : "N/A",
       lunch: this.data.mess1.lunchMess1.Friday ? this.data.mess1.lunchMess1.Friday.val : "N/A",
       dinner: this.data.mess1.dinnerMess1.Friday ? this.data.mess1.dinnerMess1.Friday.val : "N/A",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Friday, this.data.mess1.lunchMess1.Friday, this.data.mess1.dinnerMess1.Friday)
     },
     { day: 'Saturday',
       breakfast: this.data.mess1.breakfastMess1.Saturday ? this.data.mess1.breakfastMess1.Saturday.val : "N/A",
       lunch: this.data.mess1.lunchMess1.Saturday ? this.data.mess1.lunchMess1.Saturday.val : "N/A",
       dinner: this.data.mess1.dinnerMess1.Saturday ? this.data.mess1.dinnerMess1.Saturday.val : "N/A",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Saturday, this.data.mess1.lunchMess1.Saturday, this.data.mess1.dinnerMess1.Saturday)
     },
     { day: 'Sunday',
       breakfast: this.data.mess1.breakfastMess1.Sunday ? this.data.mess1.breakfastMess1.Sunday.val : "N/A",
       lunch: this.data.mess1.lunchMess1.Sunday ? this.data.mess1.lunchMess1.Sunday.val : "N/A",
       dinner: this.data.mess1.dinnerMess1.Sunday ? this.data.mess1.dinnerMess1.Sunday.val : "N/A",
       cost: this.checkCost(this.data.mess1.breakfastMess1.Sunday, this.data.mess1.lunchMess1.Sunday, this.data.mess1.dinnerMess1.Sunday)
     }
    ]

    // MESS 2 DATA
    ELEMENT_DATA2: MessElement[] = [
      { day: 'Monday',
        breakfast: this.data.mess2.breakfastMess2.Monday ? this.data.mess2.breakfastMess2.Monday.val : "N/A",
        lunch: this.data.mess2.lunchMess2.Monday ? this.data.mess2.lunchMess2.Monday.val : "N/A",
        dinner: this.data.mess2.dinnerMess2.Monday ? this.data.mess2.dinnerMess2.Monday.val : "N/A",
        cost: this.checkCost(this.data.mess2.breakfastMess2.Monday, this.data.mess2.lunchMess2.Monday, this.data.mess2.dinnerMess2.Monday)
     },
     { day: 'Tuesday',
       breakfast: this.data.mess2.breakfastMess2.Tuesday ? this.data.mess2.breakfastMess2.Tuesday.val : "N/A",
       lunch: this.data.mess2.lunchMess2.Tuesday ? this.data.mess2.lunchMess2.Tuesday.val : "N/A",
       dinner: this.data.mess2.dinnerMess2.Tuesday ? this.data.mess2.dinnerMess2.Tuesday.val : "N/A",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Tuesday, this.data.mess2.lunchMess2.Tuesday, this.data.mess2.dinnerMess2.Tuesday)
     },
     { day: 'Wednesday',
       breakfast: this.data.mess2.breakfastMess2.Wednesday ? this.data.mess2.breakfastMess2.Wednesday.val : "N/A",
       lunch: this.data.mess2.lunchMess2.Wednesday ? this.data.mess2.lunchMess2.Wednesday.val : "N/A",
       dinner: this.data.mess2.dinnerMess2.Wednesday ? this.data.mess2.dinnerMess2.Wednesday.val : "N/A",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Wednesday, this.data.mess2.lunchMess2.Wednesday, this.data.mess2.dinnerMess2.Wednesday)
     },
     { day: 'Thursday',
       breakfast: this.data.mess2.breakfastMess2.Thursday ? this.data.mess2.breakfastMess2.Thursday.val : "N/A",
       lunch: this.data.mess2.lunchMess2.Thursday ? this.data.mess2.lunchMess2.Thursday.val : "N/A",
       dinner: this.data.mess2.dinnerMess2.Thursday ? this.data.mess2.dinnerMess2.Thursday.val : "N/A",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Thursday, this.data.mess2.lunchMess2.Thursday, this.data.mess2.dinnerMess2.Thursday)
     },
     { day: 'Friday',
       breakfast: this.data.mess2.breakfastMess2.Friday ? this.data.mess2.breakfastMess2.Friday.val : "N/A",
       lunch: this.data.mess2.lunchMess2.Friday ? this.data.mess2.lunchMess2.Friday.val : "N/A",
       dinner: this.data.mess2.dinnerMess2.Friday ? this.data.mess2.dinnerMess2.Friday.val : "N/A",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Friday, this.data.mess2.lunchMess2.Friday, this.data.mess2.dinnerMess2.Friday)
     },
     { day: 'Saturday',
       breakfast: this.data.mess2.breakfastMess2.Saturday ? this.data.mess2.breakfastMess2.Saturday.val : "N/A",
       lunch: this.data.mess2.lunchMess2.Saturday ? this.data.mess2.lunchMess2.Saturday.val : "N/A",
       dinner: this.data.mess2.dinnerMess2.Saturday ? this.data.mess2.dinnerMess2.Saturday.val : "N/A",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Saturday, this.data.mess2.lunchMess2.Saturday, this.data.mess2.dinnerMess2.Saturday)
     },
     { day: 'Sunday',
       breakfast: this.data.mess2.breakfastMess2.Sunday ? this.data.mess2.breakfastMess2.Sunday.val : "N/A",
       lunch: this.data.mess2.lunchMess2.Sunday ? this.data.mess2.lunchMess2.Sunday.val : "N/A",
       dinner: this.data.mess2.dinnerMess2.Sunday ? this.data.mess2.dinnerMess2.Sunday.val : "N/A",
       cost: this.checkCost(this.data.mess2.breakfastMess2.Sunday, this.data.mess2.lunchMess2.Sunday, this.data.mess2.dinnerMess2.Sunday)
     }
    ]

    checkCost(val1, val2, val3) {
      if (val1 === undefined && val2 === undefined && val3 === undefined) {
        return 0
      }
      else if (val1 === undefined && val2 === undefined) {
        return val3.cost
      }
      else if (val2 === undefined && val3 === undefined) {
        return val1.cost
      }
      else if (val3 === undefined && val1 === undefined) {
        return val2.cost
      }
      else if (val1 === undefined) {
        return val2.cost + val3.cost
      }
      else if(val2 === undefined) {
        return val1.cost + val3.cost
      }
      else if(val3 === undefined) {
        return val1.cost + val2.cost
      }
      else {
        return val1.cost + val2.cost + val3.cost
      }
    }

    getTotalCostMess1() {
      return this.ELEMENT_DATA1.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

    getTotalCostMess2() {
      return this.ELEMENT_DATA2.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

    displayedColumns: string[] = ['day','breakfast', 'lunch', 'dinner', 'cost'];
    dataSource1 = this.ELEMENT_DATA1;
    dataSource2 = this.ELEMENT_DATA2;
}