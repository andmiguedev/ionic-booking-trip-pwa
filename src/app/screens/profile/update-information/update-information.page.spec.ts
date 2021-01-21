import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateInformationPage } from './update-information.page';

describe('UpdateInformationPage', () => {
  let component: UpdateInformationPage;
  let fixture: ComponentFixture<UpdateInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
