import React from "react"

import {
  Avatar,
  ChatContainer,
  Conversation,
  ConversationHeader,
  ConversationList,
  InfoButton,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  MessageSeparator,
  TypingIndicator,
  VideoCallButton,
  VoiceCallButton,
} from "@chatscope/chat-ui-kit-react"

import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css"

const Inbox = () => {
  return (
    <div style={{ height: "100vh" }}>
      <MainContainer
        responsive={true}
        // className="flex flex-row-reverse"
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <ConversationList>
          <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
            <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=sobh5ztu" name="Lilly" />
          </Conversation>

          <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
            <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=83i5rgct" name="Joe" />
          </Conversation>

          <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you">
            <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=qyo9x863" name="Emily" />
          </Conversation>

          <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you">
            <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=p2iyhmp9" name="Kai" />
          </Conversation>

          <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
            <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=j9ilmxiq" name="Akane" />
          </Conversation>

          <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
            <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=brearuvd" name="Eliot" />
          </Conversation>

          <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
            <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=l52d4qg0" name="Zoe" />
          </Conversation>

          <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
            <Avatar
              src="https://api.lorem.space/image/face?w=40&h=40&hash=qvgy2ptv"
              name="Patrik"
            />
          </Conversation>
        </ConversationList>
        <ChatContainer style={{}}>
          <ConversationHeader>
            <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=nhv7a6j1" name="Emily" />
            <ConversationHeader.Content userName="Ankita" info="Active 10 mins ago" />
            <ConversationHeader.Actions>
              <VoiceCallButton />
              <VideoCallButton />
              <InfoButton />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList typingIndicator={<TypingIndicator content="Ankita is typing" />}>
            {/* <MessageSeparator content="Saturday, 30 November 2019" /> */}

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single",
              }}
            >
              {/* <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=ltz6hagt" name={"Emily"} /> */}
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "localSender",
                direction: "outgoing",
                position: "single",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last",
              }}
            >
              {/* <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=najefpm7" name={"Emily"} /> */}
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "last",
              }}
            />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last",
              }}
            >
              {/* <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=22k9ff6c" name={"Emily"} /> */}
            </Message>

            {/* <MessageSeparator content="Saturday, 31 November 2019" /> */}

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single",
              }}
            >
              {/* <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=beyn3zgw" name={"Emily"} /> */}
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "localSender",
                direction: "outgoing",
                position: "single",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "normal",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last",
              }}
            >
              {/* <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=jy4bnsgy" name={"Emily"} /> */}
            </Message>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "first",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "normal",
              }}
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                direction: "outgoing",
                position: "last",
              }}
            />

            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "first",
              }}
              avatarSpacer
            />
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "last",
              }}
            >
              {/* <Avatar src="https://api.lorem.space/image/face?w=40&h=40&hash=qonv3r06" name={"Emily"} /> */}
            </Message>
          </MessageList>
          <MessageInput placeholder="Type message here" />
        </ChatContainer>
      </MainContainer>
    </div>
  )
}

export default Inbox
