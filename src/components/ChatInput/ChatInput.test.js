import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ChatInput from "./ChatInput";

describe('ChatInput component', () => {
    it('Should render input value', () => {
        render(<ChatInput
            channelName={'RANDOM'}
            channelId="iO4LAhOy73VPz7gDawWR"
            chatRef={{}}
        />)
    })
})