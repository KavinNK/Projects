import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input ('tire') tire;
  @Input ('month') month:String;
  @Input ('numberOfUsers') numberOfUsers:String;
  @Input ('userName') userName:String;
  @Input ('price') price;
  @Input ('upp') upp;
  @Input ('storage') storage:String;
  @Input ('uPp') uPp;
  @Input ('dps') dps;
  @Input ('communityAccess') communityAccess:String;
  @Input ('freeDomain') freeDomain;
  @Input ('monthlyStatus') monthlyStatus;

  constructor() { }

  ngOnInit(): void {
  }

}
