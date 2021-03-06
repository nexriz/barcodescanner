/**
 * BUILDING BLOCKS
 */

const REQUESTED = "REQUESTED"

const REQUEST = "REQUEST"
const SUCCESS = "SUCCESS"
const FAILED = "FAILED"
const ERROR = "ERROR"

const CREATE = "CREATE"
const READ   = "READ"
const UPDATE = "UPDATE"
const DELETE = "DELETE"

const FIND   = "FIND"
const ADD    = "ADD"
const EMIT   = "EMIT"

const JOIN   = "JOIN"
const LEAVE  = "LEAVE"

const CREATED = "CREATED"
const JOINED = "JOINED"
const LEFT = "LEFT"


const LOCAL = "LOCAL"
const CLIENT = "CLIENT"
const SOCKET = "SOCKET"
const REST = "REST"

const ROOM = "ROOM"
// const PRODUCT = "PRODUCT"
const BARCODE = "BARCODE"
const LIST = "LIST"
const MEMBER = "MEMBER"


/**
 * COLLECTIONS
 */

export const PRODUCT = "PRODUCT"
export const PRODUCT_ADD = "PRODUCT_ADD"
export const PRODUCT_REPLACE_ALL = "PRODUCT_REPLACE_ALL"
export const PRODUCT_UPDATE = "PRODUCT_UPDATE"
export const PRODUCT_REQUESTED = "PRODUCT_REQUESTED"
export const PRODUCT_RECEIVED = "PRODUCT_RECEIVED"
export const PRODUCT_EMIT = "PRODUCT_EMIT"

export const SOCKET_ROOM_JOIN_REQUESTED = "SOCKET_ROOM_JOIN_REQUESTED"
export const SOCKET_ROOM_LEAVE_REQUESTED = "SOCKET_ROOM_LEAVE_REQUESTED"
export const SOCKET_ROOM_CREATE_REQUESTED = "SOCKET_ROOM_CREATE_REQUESTED"

export const SOCKET_ROOM_JOINED = "SOCKET_ROOM_JOINED"
export const SOCKET_ROOM_LEFT = "SOCKET_ROOM_LEFT"
export const SOCKET_ROOM_CREATED = "SOCKET_ROOM_CREATED"

export const SOCKET_ROOM_CREATED_ERROR = "SOCKET_ROOM_CREATED_ERROR"
export const SOCKET_ROOM_JOINED_ERROR = "SOCKET_ROOM_JOINED_ERROR"

export const SOCKET_ROOM_MEMBER_LIST = "SOCKET_ROOM_MEMBER_LIST"



/**
 * ACTIONS
 * 
 * TYPE_COLLECTION_SPECIFIC_CRUD_STATUS
 */


function serverAction({type, item, crud}) {
	const status = [REQUEST, SUCCESS, FAILED, ERROR]
	return status.reduce((acc, state) => {
		acc[state] = `${type}_${item}_${crud}_${state}`
		return acc
	}, {})
}

export const Product = {
	create: serverAction({type: CLIENT, item: PRODUCT, crud: CREATE}),
	replaceAll: serverAction({type: SOCKET, item: PRODUCT, crud: UPDATE}),

}



