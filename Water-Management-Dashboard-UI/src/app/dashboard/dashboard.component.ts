import { Component, OnInit } from '@angular/core';
import {DashboarddataService} from './dashboarddata.service';
import {DashboardData} from './dashboarddata';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  view: any[] = [500, 300];
  bargraphdata=[];
  data=[];
  display=true;
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Year';
  showYAxisLabel = true;
  yAxisLabel = 'Rate of Consumption';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  view1: any[] = [500, 300];

  // options
  showXAxis1 = true;
  showYAxis1 = true;
  gradient1 = false;
  showLegend1 = true;
  showXAxisLabel1 = true;
  xAxisLabel1 = 'Country';
  showYAxisLabel1 = true;
  yAxisLabel1 = 'Population';

  colorScheme1 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  view2: any[] = [700, 300];

  // options
  showLegend2 = true;

  colorScheme2 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels2 = true;
  explodeSlices2 = false;
  doughnut2 = true;
  gradient2 = false;
  single2;

  // single2 = [
  //   {
  //     "name": "Groningen",
  //     "value": 8940000
  //   },
  //   {
  //     "name": "Drenthe",
  //     "value": 5000000
  //   },
  //   {
  //     "name": "Flevoland",
  //     "value": 7200000
  //   },
  //   {
  //     "name": "Friesland",
  //     "value": 5300000
  //   },
  //   {
  //     "name": "Gelderland",
  //     "value": 4200000
  //   },
  //   {
  //     "name": "Limburg",
  //     "value": 7000000
  //   },
  //   {
  //     "name": "North Brabant",
  //     "value": 6300000
  //   },
  //   {
  //     "name": "North Holland",
  //     "value": 4600000
  //   },
  //   {
  //     "name": "Overijssel",
  //     "value": 5300000
  //   },
  //   {
  //     "name": "South Holland",
  //     "value": 5800000
  //   },
  //   {
  //     "name": "Utrecht",
  //     "value": 7300000
  //   },
  //   {
  //     "name": "Zeeland",
  //     "value": 6800000
  //   }
  // ];

  constructor( private service: DashboarddataService, private webservice: WebsocketService) {
    this.service.getData().subscribe((res:any[])=>{
      this.display=false;
      let x;
      let insertdata;
      let linedata;
      for(x in res){
         insertdata = new Object();
         linedata = new Object();
         insertdata['name']=res[x].year;
         linedata['name']=res[x].year;
         linedata['value']=res[x].consumption_rate;
         insertdata['value']=res[x].ph_value;
        this.data.push(insertdata);
        this.bargraphdata.push(linedata);
      }
      this.data=JSON.parse(JSON.stringify(this.data));
      this.bargraphdata=JSON.parse(JSON.stringify(this.bargraphdata));
    })
   }

  ngOnInit() {
    this.webservice.listen('test event').subscribe((data)=>{
      this.single2 =data;
    })
    
  }

}
