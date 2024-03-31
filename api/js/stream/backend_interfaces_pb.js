// source: stream/backend_interfaces.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.stream.BackendInterfacesRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.stream.BackendInterfacesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.stream.BackendInterfacesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.stream.BackendInterfacesRequest.displayName = 'proto.stream.BackendInterfacesRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.stream.BackendInterfacesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.stream.BackendInterfacesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.stream.BackendInterfacesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stream.BackendInterfacesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    senderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    receiverId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    transactionId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    messageType: jspb.Message.getFieldWithDefault(msg, 5, ""),
    resultCode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    requestBody: jspb.Message.getFieldWithDefault(msg, 7, ""),
    requestError: jspb.Message.getFieldWithDefault(msg, 8, ""),
    responseBody: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.stream.BackendInterfacesRequest}
 */
proto.stream.BackendInterfacesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.stream.BackendInterfacesRequest;
  return proto.stream.BackendInterfacesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.stream.BackendInterfacesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.stream.BackendInterfacesRequest}
 */
proto.stream.BackendInterfacesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiverId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTransactionId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResultCode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestBody(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestError(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponseBody(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.stream.BackendInterfacesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.stream.BackendInterfacesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.stream.BackendInterfacesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.stream.BackendInterfacesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSenderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReceiverId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTransactionId();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMessageType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResultCode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRequestBody();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRequestError();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getResponseBody();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string sender_id = 1;
 * @return {string}
 */
proto.stream.BackendInterfacesRequest.prototype.getSenderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.setSenderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string receiver_id = 2;
 * @return {string}
 */
proto.stream.BackendInterfacesRequest.prototype.getReceiverId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.setReceiverId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.stream.BackendInterfacesRequest.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
*/
proto.stream.BackendInterfacesRequest.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.stream.BackendInterfacesRequest.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 transaction_id = 4;
 * @return {number}
 */
proto.stream.BackendInterfacesRequest.prototype.getTransactionId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string message_type = 5;
 * @return {string}
 */
proto.stream.BackendInterfacesRequest.prototype.getMessageType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.setMessageType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string result_code = 6;
 * @return {string}
 */
proto.stream.BackendInterfacesRequest.prototype.getResultCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.setResultCode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string request_body = 7;
 * @return {string}
 */
proto.stream.BackendInterfacesRequest.prototype.getRequestBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.setRequestBody = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string request_error = 8;
 * @return {string}
 */
proto.stream.BackendInterfacesRequest.prototype.getRequestError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.setRequestError = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string response_body = 9;
 * @return {string}
 */
proto.stream.BackendInterfacesRequest.prototype.getResponseBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.stream.BackendInterfacesRequest} returns this
 */
proto.stream.BackendInterfacesRequest.prototype.setResponseBody = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


goog.object.extend(exports, proto.stream);
