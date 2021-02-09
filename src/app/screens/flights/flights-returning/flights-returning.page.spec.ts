import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { FlightsReturningPage } from "./flights-returning.page";

describe("FlightsReturningPage", () => {
  let component: FlightsReturningPage;
  let fixture: ComponentFixture<FlightsReturningPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsReturningPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightsReturningPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
