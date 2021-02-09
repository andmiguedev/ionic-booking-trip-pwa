import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { FlightsDepartingPage } from "./flights-departing.page";

describe("DepartingResultsPage", () => {
  let component: FlightsDepartingPage;
  let fixture: ComponentFixture<FlightsDepartingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsDepartingPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightsDepartingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
