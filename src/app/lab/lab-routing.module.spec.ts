import { LabRoutingModule } from './lab-routing.module';

describe('LabRoutingModule', () => {
  let labRoutingModule: LabRoutingModule;

  beforeEach(() => {
    labRoutingModule = new LabRoutingModule();
  });

  it('should create an instance', () => {
    expect(labRoutingModule).toBeTruthy();
  });
});
