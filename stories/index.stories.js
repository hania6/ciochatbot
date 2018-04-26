import React from 'react';

import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
//import { linkTo } from '@storybook/addon-links';

import ChatItem from '../client/app/modules/ChatLayout/components/ChatItem';

storiesOf('Chat Item', module)
    .add(
        'Server Chat Bubble',
        () => <ChatItem text={"Hi I am a Chatbot nice to meet you"} />
    ).add(
        'Client Chat Bubble',
        () => <ChatItem text={"Hi I am a Chatbot nice to meet you"} isOwn/>
    );
