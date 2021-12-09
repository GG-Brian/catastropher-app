import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupporterDeleteConfirmPage } from './supporter-delete-confirm.page';

describe('SupporterDeleteConfirmPage', () => {
  let component: SupporterDeleteConfirmPage;
  let fixture: ComponentFixture<SupporterDeleteConfirmPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SupporterDeleteConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupporterDeleteConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
