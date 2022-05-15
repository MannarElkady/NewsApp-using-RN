import renderer from 'react-test-renderer';
import React from 'react';
import SettingSection from '../../src/Component/SettingSection';

function getSettingSectionComponent() {
  return renderer.create(<SettingSection />);
}

describe('Setting Component tests', () => {
  it('can be rendered', () => {
    expect(getSettingSectionComponent().toJSON()).toMatchSnapshot();
  });
});
