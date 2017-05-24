export default {
  // Action types to be dispatched by the user
  WEBSOCKET_CONNECT: 'WEBSOCKET_CONNECT',
  WEBSOCKET_DISCONNECT: 'WEBSOCKET_DISCONNECT',
  WEBSOCKET_SEND: 'WEBSOCKET_SEND',

  // Action types dispatched by the WebSocket implementation
  WEBSOCKET_CONNECTING: 'WEBSOCKET_CONNECTING',
  WEBSOCKET_OPEN: 'WEBSOCKET_OPEN',
  WEBSOCKET_DISCONNECTING: 'WEBSOCKET_DISCONNECTING',
  WEBSOCKET_CLOSED: 'WEBSOCKET_CLOSED',
  WEBSOCKET_MESSAGE: 'WEBSOCKET_MESSAGE'
};
