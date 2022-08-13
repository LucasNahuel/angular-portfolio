import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDialogContentComponent } from './project-dialog-content.component';

describe('ProjectDialogContentComponent', () => {
  let component: ProjectDialogContentComponent;
  let fixture: ComponentFixture<ProjectDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
