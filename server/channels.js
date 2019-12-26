const { serverlog } = require("./utils")


const announce = (io, room, msg) => () => {
	io.to(room).emit("/notifications", msg)
}

const joinRoom = (io, socket) => room => {
	socket.leave(application)
	socket.join(room, announce(io, room, "A new device has joined"))
}

const leaveRoom = (io, socket) => room => {
	socket.leave(room, announce(io, room, "A device has left"))
	socket.join(application)
}


module.exports = () => app => {
	const io = app.get("socket")

	io.on("connection", socket => {
		const { defaultRoom="scanner" } = socket.handshake.query


		socket.join(defaultRoom)

		socket.on("/join", joinRoom(io, socket))
		socket.on("/leave", leaveRoom(io, socket))


		socket.on("/post/barcode", (room, barcode) => {
			// socket.broadcast.emit("/recieve/barcode", barcode)

			socket.broadcast.to(room).emit("/recieve/barcode", barcode)
		})
	})

	io.on("disconnect", socket => {
		console.log("Socket disconnected")
	})

	serverlog("channels")
}