import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Clock } from './Clock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Clock',
	component: Clock,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes

} as ComponentMeta<typeof Clock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const DigitalClock = Template.bind({});
export const AnalogClock = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DigitalClock.args = {
	mode:'Digital'
};
AnalogClock.args={
	mode:'Analog'
}


