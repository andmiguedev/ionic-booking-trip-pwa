import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlightInformationPage } from './flight-information.page';

describe('FlightInformationPage', () => {
  let component: FlightInformationPage;
  let fixture: ComponentFixture<FlightInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlightInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
