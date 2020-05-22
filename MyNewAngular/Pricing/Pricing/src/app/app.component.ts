import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pricing';
  profileData=[
    {
      tire:"Free",
      month:"month",
      numberOfUsers:"Single User",
      storage:"5GB Storage",
      price:"0",
      upp:"Unlimited Public Projects",
      communityAccess:"Comunity Access",
      uPp:"Unlimited Private Projects",
      dps:"Dedicated Phone Support",
      freeDomain:"Free Domain",
      monthlyStatus:"Monthly Status Report"

    },
    {
      tire:"Plus",
      month:"month",
      numberOfUsers:"5 Users",
      storage:"50GB Storage",
      price:"9",
      upp:"Unlimited Public Projects",
      communityAccess:"Comunity Access",
      uPp:"Unlimited Private Projects",
      dps:"Dedicated Phone Support",
      freeDomain:"Free Domain",
      monthlyStatus:"Monthly Status Report"

    },
    {
      tire:"Pro",
      month:"month",
      numberOfUsers:"Unlimited Users",
      storage:"150GB Storage",
      price:"49",
      upp:"Unlimited Public Projects",
      communityAccess:"Comunity Access",
      uPp:"Unlimited Private Projects",   
      dps:"Dedicated Phone Support",
      freeDomain:"Free Domain",
      monthlyStatus:"Monthly Status Report"
    },
   
  ];

  
}
