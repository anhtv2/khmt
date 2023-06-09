export const SOCKET_IO_EVENTS = {
  CONNECT_TO_WHITEBOARD: 'connect_to_whiteboard',
  CONNECT_TO_WHITEBOARD_PAGE: 'connect_to_whiteboard_page',
  REQUEST_DRAW: 'request_draw',
  ON_REQUEST_DRAW: 'on_request_draw',

  DRAW_LINE_END: 'draw_end',
  DRAW_RECT_END: 'draw_rect_end',
  DRAW_CIRCLE_END: 'draw_circle_end',
  ADD_TEXT: 'add_text',
  ON_DRAW_LINE_END: 'on_draw_end',
  ON_DRAW_RECT_END: 'on_draw_rect_end',
  ON_DRAW_CIRCLE_END: 'on_draw_circle_end',
  ON_ADD_TEXT_END: 'on_add_text',
  ADD_NEW_PAGE: 'add_new_page',
  ON_ADD_NEW_PAGE: 'on_add_new_page',
  DELETE_PAGE: 'delete_page',
  ON_DELETE_PAGE: 'on_delete_page',

  CHANGE_STROKE_DRAW: 'change_stroke_draw',
  ON_CHANGE_STROKE_DRAW: 'on_change_stroke_draw',

  CHECK_LOCAL_STORAGE: 'check_local_storage',
  ON_CHECK_LOCAL_STORAGE: 'on_check_local_storage',
}

