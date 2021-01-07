import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { DepartingResultsPage } from "./departing-results.page";

describe("DepartingResultsPage", () => {
  let component: DepartingResultsPage;
  let fixture: ComponentFixture<DepartingResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartingResultsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartingResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
