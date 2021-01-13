import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { FlightsSearchPage } from "./flights-search.page";

describe("FlightsSearchPage", () => {
  let component: FlightsSearchPage;
  let fixture: ComponentFixture<FlightsSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsSearchPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightsSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
