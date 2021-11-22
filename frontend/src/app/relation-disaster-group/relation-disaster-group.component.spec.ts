import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelationDisasterGroupComponent } from './relation-disaster-group.component';

describe('RelationDisasterGroupComponent', () => {
  let component: RelationDisasterGroupComponent;
  let fixture: ComponentFixture<RelationDisasterGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationDisasterGroupComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelationDisasterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
