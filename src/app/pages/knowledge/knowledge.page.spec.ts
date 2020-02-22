import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KnowledgePage } from './knowledge.page';

describe('KnowledgePage', () => {
  let component: KnowledgePage;
  let fixture: ComponentFixture<KnowledgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KnowledgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
