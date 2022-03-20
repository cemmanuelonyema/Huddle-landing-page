import React from "react";
import { Flex } from "../styles/Flex";
import { StyledContent } from "../styles/StyledContent";

const Content = () => {
  return (
    <div>
      <StyledContent>
        <Flex className="col-reverse">
          <div>
            <h3>Grow Together</h3>
            <p>
              Generate meaningful discussions with your audience and build a
              strong, loyal community. Think of the insightful conversations you
              miss out on with a feedback form
            </p>
          </div>
          <div>
            <img
              src="/images/illustration-grow-together.svg"
              alt="illustration1 "
            />
          </div>
        </Flex>
      </StyledContent>

      <StyledContent>
        <Flex>
          <div>
            <img
              src="/images/illustration-flowing-conversation.svg"
              alt="illustration 2"
            />
          </div>

          <div>
            <h3>Flowing Conversations</h3>
            <p>
              You wouldn't paginate a conversation in real life, so why do it
              online? Our threads have just-in-time loading for a more natural
              flow.",
            </p>
          </div>
        </Flex>
      </StyledContent>

      <StyledContent>
        <Flex className="col-reverse">
          <div>
            <h3>Your users</h3>
            <p>
              It takes no time at all to integrate Huddle with your app's
              authentication solution. This means, once signed in to your app,
              your users can start chatting immediately.
            </p>
          </div>
          <div>
            <img
              src="/images/illustration-your-users.svg"
              alt="illustration 3"
            />
          </div>
        </Flex>
      </StyledContent>
    </div>
  );
};

export default Content;

// const content = [
//   {
//     id: 1,
//     title: "Grow Together",
//     body: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
//     image: "illustration-grow-together.svg",
//   },
//   {
//     id: 2,
//     title: "Flowing Conversations",
//     body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
//     image: "illustration-flowing-conversation.svg",
//   },
//   {
//     id: 3,
//     title: "Your Users",
//     body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
//     image: "illustration-your-users.svg",
//   },
// ];

//   export default content
