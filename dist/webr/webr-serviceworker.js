"use strict";(()=>{var e=Object.create,t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,n=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty,o=(e,t)=>function(){return t||(0,e[s(e)[0]])((t={exports:{}}).exports,t),t.exports},c=o({"node_modules/@msgpack/msgpack/dist/utils/int.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.getUint64=e.getInt64=e.setInt64=e.setUint64=e.UINT32_MAX=void 0,e.UINT32_MAX=4294967295,e.setUint64=function(e,t,i){const s=i/4294967296,n=i;e.setUint32(t,s),e.setUint32(t+4,n)},e.setInt64=function(e,t,i){const s=Math.floor(i/4294967296),n=i;e.setUint32(t,s),e.setUint32(t+4,n)},e.getInt64=function(e,t){return 4294967296*e.getInt32(t)+e.getUint32(t+4)},e.getUint64=function(e,t){return 4294967296*e.getUint32(t)+e.getUint32(t+4)}}}),a=o({"node_modules/@msgpack/msgpack/dist/utils/utf8.js"(e){var t,i,s;Object.defineProperty(e,"__esModule",{value:!0}),e.utf8DecodeTD=e.TEXT_DECODER_THRESHOLD=e.utf8DecodeJs=e.utf8EncodeTE=e.TEXT_ENCODER_THRESHOLD=e.utf8EncodeJs=e.utf8Count=void 0;var n=c(),r=("undefined"==typeof process||"never"!==(null===(t=null===process||void 0===process?void 0:process.env)||void 0===t?void 0:t.TEXT_ENCODING))&&"undefined"!=typeof TextEncoder&&"undefined"!=typeof TextDecoder;e.utf8Count=function(e){const t=e.length;let i=0,s=0;for(;s<t;){let n=e.charCodeAt(s++);if(4294967168&n)if(4294965248&n){if(n>=55296&&n<=56319&&s<t){const t=e.charCodeAt(s);56320==(64512&t)&&(++s,n=((1023&n)<<10)+(1023&t)+65536)}i+=4294901760&n?4:3}else i+=2;else i++}return i},e.utf8EncodeJs=function(e,t,i){const s=e.length;let n=i,r=0;for(;r<s;){let i=e.charCodeAt(r++);if(4294967168&i){if(4294965248&i){if(i>=55296&&i<=56319&&r<s){const t=e.charCodeAt(r);56320==(64512&t)&&(++r,i=((1023&i)<<10)+(1023&t)+65536)}4294901760&i?(t[n++]=i>>18&7|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128):(t[n++]=i>>12&15|224,t[n++]=i>>6&63|128)}else t[n++]=i>>6&31|192;t[n++]=63&i|128}else t[n++]=i}};var o=r?new TextEncoder:void 0;e.TEXT_ENCODER_THRESHOLD=r?"undefined"!=typeof process&&"force"!==(null===(i=null===process||void 0===process?void 0:process.env)||void 0===i?void 0:i.TEXT_ENCODING)?200:0:n.UINT32_MAX,e.utf8EncodeTE=(null==o?void 0:o.encodeInto)?function(e,t,i){o.encodeInto(e,t.subarray(i))}:function(e,t,i){t.set(o.encode(e),i)},e.utf8DecodeJs=function(e,t,i){let s=t;const n=s+i,r=[];let o="";for(;s<n;){const t=e[s++];if(128&t)if(192==(224&t)){const i=63&e[s++];r.push((31&t)<<6|i)}else if(224==(240&t)){const i=63&e[s++],n=63&e[s++];r.push((31&t)<<12|i<<6|n)}else if(240==(248&t)){let i=(7&t)<<18|(63&e[s++])<<12|(63&e[s++])<<6|63&e[s++];i>65535&&(i-=65536,r.push(i>>>10&1023|55296),i=56320|1023&i),r.push(i)}else r.push(t);else r.push(t);r.length>=4096&&(o+=String.fromCharCode(...r),r.length=0)}return r.length>0&&(o+=String.fromCharCode(...r)),o};var a=r?new TextDecoder:null;e.TEXT_DECODER_THRESHOLD=r?"undefined"!=typeof process&&"force"!==(null===(s=null===process||void 0===process?void 0:process.env)||void 0===s?void 0:s.TEXT_DECODER)?200:0:n.UINT32_MAX,e.utf8DecodeTD=function(e,t,i){const s=e.subarray(t,t+i);return a.decode(s)}}}),d=o({"node_modules/@msgpack/msgpack/dist/ExtData.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ExtData=void 0,e.ExtData=class{constructor(e,t){this.type=e,this.data=t}}}}),h=o({"node_modules/@msgpack/msgpack/dist/DecodeError.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.DecodeError=void 0;var t=class extends Error{constructor(e){super(e);const i=Object.create(t.prototype);Object.setPrototypeOf(this,i),Object.defineProperty(this,"name",{configurable:!0,enumerable:!1,value:t.name})}};e.DecodeError=t}}),u=o({"node_modules/@msgpack/msgpack/dist/timestamp.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.timestampExtension=e.decodeTimestampExtension=e.decodeTimestampToTimeSpec=e.encodeTimestampExtension=e.encodeDateToTimeSpec=e.encodeTimeSpecToTimestamp=e.EXT_TIMESTAMP=void 0;var t=h(),i=c();function s({sec:e,nsec:t}){if(e>=0&&t>=0&&e<=17179869183){if(0===t&&e<=4294967295){const t=new Uint8Array(4);return new DataView(t.buffer).setUint32(0,e),t}{const i=e/4294967296,s=4294967295&e,n=new Uint8Array(8),r=new DataView(n.buffer);return r.setUint32(0,t<<2|3&i),r.setUint32(4,s),n}}{const s=new Uint8Array(12),n=new DataView(s.buffer);return n.setUint32(0,t),(0,i.setInt64)(n,4,e),s}}function n(e){const t=e.getTime(),i=Math.floor(t/1e3),s=1e6*(t-1e3*i),n=Math.floor(s/1e9);return{sec:i+n,nsec:s-1e9*n}}function r(e){return e instanceof Date?s(n(e)):null}function o(e){const s=new DataView(e.buffer,e.byteOffset,e.byteLength);switch(e.byteLength){case 4:return{sec:s.getUint32(0),nsec:0};case 8:{const e=s.getUint32(0);return{sec:4294967296*(3&e)+s.getUint32(4),nsec:e>>>2}}case 12:return{sec:(0,i.getInt64)(s,4),nsec:s.getUint32(0)};default:throw new t.DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${e.length}`)}}function a(e){const t=o(e);return new Date(1e3*t.sec+t.nsec/1e6)}e.EXT_TIMESTAMP=-1,e.encodeTimeSpecToTimestamp=s,e.encodeDateToTimeSpec=n,e.encodeTimestampExtension=r,e.decodeTimestampToTimeSpec=o,e.decodeTimestampExtension=a,e.timestampExtension={type:e.EXT_TIMESTAMP,encode:r,decode:a}}}),f=o({"node_modules/@msgpack/msgpack/dist/ExtensionCodec.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ExtensionCodec=void 0;var t=d(),i=u(),s=class{constructor(){this.builtInEncoders=[],this.builtInDecoders=[],this.encoders=[],this.decoders=[],this.register(i.timestampExtension)}register({type:e,encode:t,decode:i}){if(e>=0)this.encoders[e]=t,this.decoders[e]=i;else{const s=1+e;this.builtInEncoders[s]=t,this.builtInDecoders[s]=i}}tryToEncode(e,i){for(let s=0;s<this.builtInEncoders.length;s++){const n=this.builtInEncoders[s];if(null!=n){const r=n(e,i);if(null!=r){const e=-1-s;return new t.ExtData(e,r)}}}for(let s=0;s<this.encoders.length;s++){const n=this.encoders[s];if(null!=n){const r=n(e,i);if(null!=r){const e=s;return new t.ExtData(e,r)}}}return e instanceof t.ExtData?e:null}decode(e,i,s){const n=i<0?this.builtInDecoders[-1-i]:this.decoders[i];return n?n(e,i,s):new t.ExtData(i,e)}};e.ExtensionCodec=s,s.defaultCodec=new s}}),l=o({"node_modules/@msgpack/msgpack/dist/utils/typedArrays.js"(e){function t(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e instanceof ArrayBuffer?new Uint8Array(e):Uint8Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.createDataView=e.ensureUint8Array=void 0,e.ensureUint8Array=t,e.createDataView=function(e){if(e instanceof ArrayBuffer)return new DataView(e);const i=t(e);return new DataView(i.buffer,i.byteOffset,i.byteLength)}}}),p=o({"node_modules/@msgpack/msgpack/dist/Encoder.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Encoder=e.DEFAULT_INITIAL_BUFFER_SIZE=e.DEFAULT_MAX_DEPTH=void 0;var t=a(),i=f(),s=c(),n=l();e.DEFAULT_MAX_DEPTH=100,e.DEFAULT_INITIAL_BUFFER_SIZE=2048,e.Encoder=class{constructor(t=i.ExtensionCodec.defaultCodec,s=void 0,n=e.DEFAULT_MAX_DEPTH,r=e.DEFAULT_INITIAL_BUFFER_SIZE,o=!1,c=!1,a=!1,d=!1){this.extensionCodec=t,this.context=s,this.maxDepth=n,this.initialBufferSize=r,this.sortKeys=o,this.forceFloat32=c,this.ignoreUndefined=a,this.forceIntegerToFloat=d,this.pos=0,this.view=new DataView(new ArrayBuffer(this.initialBufferSize)),this.bytes=new Uint8Array(this.view.buffer)}reinitializeState(){this.pos=0}encodeSharedRef(e){return this.reinitializeState(),this.doEncode(e,1),this.bytes.subarray(0,this.pos)}encode(e){return this.reinitializeState(),this.doEncode(e,1),this.bytes.slice(0,this.pos)}doEncode(e,t){if(t>this.maxDepth)throw new Error(`Too deep objects in depth ${t}`);null==e?this.encodeNil():"boolean"==typeof e?this.encodeBoolean(e):"number"==typeof e?this.encodeNumber(e):"string"==typeof e?this.encodeString(e):this.encodeObject(e,t)}ensureBufferSizeToWrite(e){const t=this.pos+e;this.view.byteLength<t&&this.resizeBuffer(2*t)}resizeBuffer(e){const t=new ArrayBuffer(e),i=new Uint8Array(t),s=new DataView(t);i.set(this.bytes),this.view=s,this.bytes=i}encodeNil(){this.writeU8(192)}encodeBoolean(e){!1===e?this.writeU8(194):this.writeU8(195)}encodeNumber(e){Number.isSafeInteger(e)&&!this.forceIntegerToFloat?e>=0?e<128?this.writeU8(e):e<256?(this.writeU8(204),this.writeU8(e)):e<65536?(this.writeU8(205),this.writeU16(e)):e<4294967296?(this.writeU8(206),this.writeU32(e)):(this.writeU8(207),this.writeU64(e)):e>=-32?this.writeU8(224|e+32):e>=-128?(this.writeU8(208),this.writeI8(e)):e>=-32768?(this.writeU8(209),this.writeI16(e)):e>=-2147483648?(this.writeU8(210),this.writeI32(e)):(this.writeU8(211),this.writeI64(e)):this.forceFloat32?(this.writeU8(202),this.writeF32(e)):(this.writeU8(203),this.writeF64(e))}writeStringHeader(e){if(e<32)this.writeU8(160+e);else if(e<256)this.writeU8(217),this.writeU8(e);else if(e<65536)this.writeU8(218),this.writeU16(e);else{if(!(e<4294967296))throw new Error(`Too long string: ${e} bytes in UTF-8`);this.writeU8(219),this.writeU32(e)}}encodeString(e){if(e.length>t.TEXT_ENCODER_THRESHOLD){const i=(0,t.utf8Count)(e);this.ensureBufferSizeToWrite(5+i),this.writeStringHeader(i),(0,t.utf8EncodeTE)(e,this.bytes,this.pos),this.pos+=i}else{const i=(0,t.utf8Count)(e);this.ensureBufferSizeToWrite(5+i),this.writeStringHeader(i),(0,t.utf8EncodeJs)(e,this.bytes,this.pos),this.pos+=i}}encodeObject(e,t){const i=this.extensionCodec.tryToEncode(e,this.context);if(null!=i)this.encodeExtension(i);else if(Array.isArray(e))this.encodeArray(e,t);else if(ArrayBuffer.isView(e))this.encodeBinary(e);else{if("object"!=typeof e)throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);this.encodeMap(e,t)}}encodeBinary(e){const t=e.byteLength;if(t<256)this.writeU8(196),this.writeU8(t);else if(t<65536)this.writeU8(197),this.writeU16(t);else{if(!(t<4294967296))throw new Error(`Too large binary: ${t}`);this.writeU8(198),this.writeU32(t)}const i=(0,n.ensureUint8Array)(e);this.writeU8a(i)}encodeArray(e,t){const i=e.length;if(i<16)this.writeU8(144+i);else if(i<65536)this.writeU8(220),this.writeU16(i);else{if(!(i<4294967296))throw new Error(`Too large array: ${i}`);this.writeU8(221),this.writeU32(i)}for(const i of e)this.doEncode(i,t+1)}countWithoutUndefined(e,t){let i=0;for(const s of t)void 0!==e[s]&&i++;return i}encodeMap(e,t){const i=Object.keys(e);this.sortKeys&&i.sort();const s=this.ignoreUndefined?this.countWithoutUndefined(e,i):i.length;if(s<16)this.writeU8(128+s);else if(s<65536)this.writeU8(222),this.writeU16(s);else{if(!(s<4294967296))throw new Error(`Too large map object: ${s}`);this.writeU8(223),this.writeU32(s)}for(const s of i){const i=e[s];this.ignoreUndefined&&void 0===i||(this.encodeString(s),this.doEncode(i,t+1))}}encodeExtension(e){const t=e.data.length;if(1===t)this.writeU8(212);else if(2===t)this.writeU8(213);else if(4===t)this.writeU8(214);else if(8===t)this.writeU8(215);else if(16===t)this.writeU8(216);else if(t<256)this.writeU8(199),this.writeU8(t);else if(t<65536)this.writeU8(200),this.writeU16(t);else{if(!(t<4294967296))throw new Error(`Too large extension object: ${t}`);this.writeU8(201),this.writeU32(t)}this.writeI8(e.type),this.writeU8a(e.data)}writeU8(e){this.ensureBufferSizeToWrite(1),this.view.setUint8(this.pos,e),this.pos++}writeU8a(e){const t=e.length;this.ensureBufferSizeToWrite(t),this.bytes.set(e,this.pos),this.pos+=t}writeI8(e){this.ensureBufferSizeToWrite(1),this.view.setInt8(this.pos,e),this.pos++}writeU16(e){this.ensureBufferSizeToWrite(2),this.view.setUint16(this.pos,e),this.pos+=2}writeI16(e){this.ensureBufferSizeToWrite(2),this.view.setInt16(this.pos,e),this.pos+=2}writeU32(e){this.ensureBufferSizeToWrite(4),this.view.setUint32(this.pos,e),this.pos+=4}writeI32(e){this.ensureBufferSizeToWrite(4),this.view.setInt32(this.pos,e),this.pos+=4}writeF32(e){this.ensureBufferSizeToWrite(4),this.view.setFloat32(this.pos,e),this.pos+=4}writeF64(e){this.ensureBufferSizeToWrite(8),this.view.setFloat64(this.pos,e),this.pos+=8}writeU64(e){this.ensureBufferSizeToWrite(8),(0,s.setUint64)(this.view,this.pos,e),this.pos+=8}writeI64(e){this.ensureBufferSizeToWrite(8),(0,s.setInt64)(this.view,this.pos,e),this.pos+=8}}}}),y=o({"node_modules/@msgpack/msgpack/dist/encode.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.encode=void 0;var t=p(),i={};e.encode=function(e,s=i){return new t.Encoder(s.extensionCodec,s.context,s.maxDepth,s.initialBufferSize,s.sortKeys,s.forceFloat32,s.ignoreUndefined,s.forceIntegerToFloat).encodeSharedRef(e)}}}),m=o({"node_modules/@msgpack/msgpack/dist/utils/prettyByte.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.prettyByte=void 0,e.prettyByte=function(e){return`${e<0?"-":""}0x${Math.abs(e).toString(16).padStart(2,"0")}`}}}),w=o({"node_modules/@msgpack/msgpack/dist/CachedKeyDecoder.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CachedKeyDecoder=void 0;var t=a();e.CachedKeyDecoder=class{constructor(e=16,t=16){this.maxKeyLength=e,this.maxLengthPerKey=t,this.hit=0,this.miss=0,this.caches=[];for(let e=0;e<this.maxKeyLength;e++)this.caches.push([])}canBeCached(e){return e>0&&e<=this.maxKeyLength}find(e,t,i){const s=this.caches[i-1];e:for(const n of s){const s=n.bytes;for(let n=0;n<i;n++)if(s[n]!==e[t+n])continue e;return n.str}return null}store(e,t){const i=this.caches[e.length-1],s={bytes:e,str:t};i.length>=this.maxLengthPerKey?i[Math.random()*i.length|0]=s:i.push(s)}decode(e,i,s){const n=this.find(e,i,s);if(null!=n)return this.hit++,n;this.miss++;const r=(0,t.utf8DecodeJs)(e,i,s),o=Uint8Array.prototype.slice.call(e,i,i+s);return this.store(o,r),r}}}}),g=o({"node_modules/@msgpack/msgpack/dist/Decoder.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Decoder=e.DataViewIndexOutOfBoundsError=void 0;var t=m(),i=f(),s=c(),n=a(),r=l(),o=w(),d=h(),u=e=>{const t=typeof e;return"string"===t||"number"===t},p=new DataView(new ArrayBuffer(0)),y=new Uint8Array(p.buffer);e.DataViewIndexOutOfBoundsError=(()=>{try{p.getInt8(0)}catch(e){return e.constructor}throw new Error("never reached")})();var g=new e.DataViewIndexOutOfBoundsError("Insufficient data"),E=new o.CachedKeyDecoder;e.Decoder=class{constructor(e=i.ExtensionCodec.defaultCodec,t=void 0,n=s.UINT32_MAX,r=s.UINT32_MAX,o=s.UINT32_MAX,c=s.UINT32_MAX,a=s.UINT32_MAX,d=E){this.extensionCodec=e,this.context=t,this.maxStrLength=n,this.maxBinLength=r,this.maxArrayLength=o,this.maxMapLength=c,this.maxExtLength=a,this.keyDecoder=d,this.totalPos=0,this.pos=0,this.view=p,this.bytes=y,this.headByte=-1,this.stack=[]}reinitializeState(){this.totalPos=0,this.headByte=-1,this.stack.length=0}setBuffer(e){this.bytes=(0,r.ensureUint8Array)(e),this.view=(0,r.createDataView)(this.bytes),this.pos=0}appendBuffer(e){if(-1!==this.headByte||this.hasRemaining(1)){const t=this.bytes.subarray(this.pos),i=(0,r.ensureUint8Array)(e),s=new Uint8Array(t.length+i.length);s.set(t),s.set(i,t.length),this.setBuffer(s)}else this.setBuffer(e)}hasRemaining(e){return this.view.byteLength-this.pos>=e}createExtraByteError(e){const{view:t,pos:i}=this;return new RangeError(`Extra ${t.byteLength-i} of ${t.byteLength} byte(s) found at buffer[${e}]`)}decode(e){this.reinitializeState(),this.setBuffer(e);const t=this.doDecodeSync();if(this.hasRemaining(1))throw this.createExtraByteError(this.pos);return t}*decodeMulti(e){for(this.reinitializeState(),this.setBuffer(e);this.hasRemaining(1);)yield this.doDecodeSync()}async decodeAsync(i){let s,n=!1;for await(const t of i){if(n)throw this.createExtraByteError(this.totalPos);this.appendBuffer(t);try{s=this.doDecodeSync(),n=!0}catch(t){if(!(t instanceof e.DataViewIndexOutOfBoundsError))throw t}this.totalPos+=this.pos}if(n){if(this.hasRemaining(1))throw this.createExtraByteError(this.totalPos);return s}const{headByte:r,pos:o,totalPos:c}=this;throw new RangeError(`Insufficient data in parsing ${(0,t.prettyByte)(r)} at ${c} (${o} in the current buffer)`)}decodeArrayStream(e){return this.decodeMultiAsync(e,!0)}decodeStream(e){return this.decodeMultiAsync(e,!1)}async*decodeMultiAsync(t,i){let s=i,n=-1;for await(const r of t){if(i&&0===n)throw this.createExtraByteError(this.totalPos);this.appendBuffer(r),s&&(n=this.readArraySize(),s=!1,this.complete());try{for(;yield this.doDecodeSync(),0!=--n;);}catch(t){if(!(t instanceof e.DataViewIndexOutOfBoundsError))throw t}this.totalPos+=this.pos}}doDecodeSync(){e:for(;;){const e=this.readHeadByte();let i;if(e>=224)i=e-256;else if(e<192)if(e<128)i=e;else if(e<144){const t=e-128;if(0!==t){this.pushMapState(t),this.complete();continue e}i={}}else if(e<160){const t=e-144;if(0!==t){this.pushArrayState(t),this.complete();continue e}i=[]}else{const t=e-160;i=this.decodeUtf8String(t,0)}else if(192===e)i=null;else if(194===e)i=!1;else if(195===e)i=!0;else if(202===e)i=this.readF32();else if(203===e)i=this.readF64();else if(204===e)i=this.readU8();else if(205===e)i=this.readU16();else if(206===e)i=this.readU32();else if(207===e)i=this.readU64();else if(208===e)i=this.readI8();else if(209===e)i=this.readI16();else if(210===e)i=this.readI32();else if(211===e)i=this.readI64();else if(217===e){const e=this.lookU8();i=this.decodeUtf8String(e,1)}else if(218===e){const e=this.lookU16();i=this.decodeUtf8String(e,2)}else if(219===e){const e=this.lookU32();i=this.decodeUtf8String(e,4)}else if(220===e){const e=this.readU16();if(0!==e){this.pushArrayState(e),this.complete();continue e}i=[]}else if(221===e){const e=this.readU32();if(0!==e){this.pushArrayState(e),this.complete();continue e}i=[]}else if(222===e){const e=this.readU16();if(0!==e){this.pushMapState(e),this.complete();continue e}i={}}else if(223===e){const e=this.readU32();if(0!==e){this.pushMapState(e),this.complete();continue e}i={}}else if(196===e){const e=this.lookU8();i=this.decodeBinary(e,1)}else if(197===e){const e=this.lookU16();i=this.decodeBinary(e,2)}else if(198===e){const e=this.lookU32();i=this.decodeBinary(e,4)}else if(212===e)i=this.decodeExtension(1,0);else if(213===e)i=this.decodeExtension(2,0);else if(214===e)i=this.decodeExtension(4,0);else if(215===e)i=this.decodeExtension(8,0);else if(216===e)i=this.decodeExtension(16,0);else if(199===e){const e=this.lookU8();i=this.decodeExtension(e,1)}else if(200===e){const e=this.lookU16();i=this.decodeExtension(e,2)}else{if(201!==e)throw new d.DecodeError(`Unrecognized type byte: ${(0,t.prettyByte)(e)}`);{const e=this.lookU32();i=this.decodeExtension(e,4)}}this.complete();const s=this.stack;for(;s.length>0;){const e=s[s.length-1];if(0===e.type){if(e.array[e.position]=i,e.position++,e.position!==e.size)continue e;s.pop(),i=e.array}else{if(1===e.type){if(!u(i))throw new d.DecodeError("The type of key must be string or number but "+typeof i);if("__proto__"===i)throw new d.DecodeError("The key __proto__ is not allowed");e.key=i,e.type=2;continue e}if(e.map[e.key]=i,e.readCount++,e.readCount!==e.size){e.key=null,e.type=1;continue e}s.pop(),i=e.map}}return i}}readHeadByte(){return-1===this.headByte&&(this.headByte=this.readU8()),this.headByte}complete(){this.headByte=-1}readArraySize(){const e=this.readHeadByte();switch(e){case 220:return this.readU16();case 221:return this.readU32();default:if(e<160)return e-144;throw new d.DecodeError(`Unrecognized array type byte: ${(0,t.prettyByte)(e)}`)}}pushMapState(e){if(e>this.maxMapLength)throw new d.DecodeError(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);this.stack.push({type:1,size:e,key:null,readCount:0,map:{}})}pushArrayState(e){if(e>this.maxArrayLength)throw new d.DecodeError(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);this.stack.push({type:0,size:e,array:new Array(e),position:0})}decodeUtf8String(e,t){var i;if(e>this.maxStrLength)throw new d.DecodeError(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);if(this.bytes.byteLength<this.pos+t+e)throw g;const s=this.pos+t;let r;return r=this.stateIsMapKey()&&(null===(i=this.keyDecoder)||void 0===i?void 0:i.canBeCached(e))?this.keyDecoder.decode(this.bytes,s,e):e>n.TEXT_DECODER_THRESHOLD?(0,n.utf8DecodeTD)(this.bytes,s,e):(0,n.utf8DecodeJs)(this.bytes,s,e),this.pos+=t+e,r}stateIsMapKey(){return this.stack.length>0&&1===this.stack[this.stack.length-1].type}decodeBinary(e,t){if(e>this.maxBinLength)throw new d.DecodeError(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);if(!this.hasRemaining(e+t))throw g;const i=this.pos+t,s=this.bytes.subarray(i,i+e);return this.pos+=t+e,s}decodeExtension(e,t){if(e>this.maxExtLength)throw new d.DecodeError(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);const i=this.view.getInt8(this.pos+t),s=this.decodeBinary(e,t+1);return this.extensionCodec.decode(s,i,this.context)}lookU8(){return this.view.getUint8(this.pos)}lookU16(){return this.view.getUint16(this.pos)}lookU32(){return this.view.getUint32(this.pos)}readU8(){const e=this.view.getUint8(this.pos);return this.pos++,e}readI8(){const e=this.view.getInt8(this.pos);return this.pos++,e}readU16(){const e=this.view.getUint16(this.pos);return this.pos+=2,e}readI16(){const e=this.view.getInt16(this.pos);return this.pos+=2,e}readU32(){const e=this.view.getUint32(this.pos);return this.pos+=4,e}readI32(){const e=this.view.getInt32(this.pos);return this.pos+=4,e}readU64(){const e=(0,s.getUint64)(this.view,this.pos);return this.pos+=8,e}readI64(){const e=(0,s.getInt64)(this.view,this.pos);return this.pos+=8,e}readF32(){const e=this.view.getFloat32(this.pos);return this.pos+=4,e}readF64(){const e=this.view.getFloat64(this.pos);return this.pos+=8,e}}}}),E=o({"node_modules/@msgpack/msgpack/dist/decode.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.decodeMulti=e.decode=e.defaultDecodeOptions=void 0;var t=g();e.defaultDecodeOptions={},e.decode=function(i,s=e.defaultDecodeOptions){return new t.Decoder(s.extensionCodec,s.context,s.maxStrLength,s.maxBinLength,s.maxArrayLength,s.maxMapLength,s.maxExtLength).decode(i)},e.decodeMulti=function(i,s=e.defaultDecodeOptions){return new t.Decoder(s.extensionCodec,s.context,s.maxStrLength,s.maxBinLength,s.maxArrayLength,s.maxMapLength,s.maxExtLength).decodeMulti(i)}}}),U=o({"node_modules/@msgpack/msgpack/dist/utils/stream.js"(e){function t(e){return null!=e[Symbol.asyncIterator]}function i(e){if(null==e)throw new Error("Assertion Failure: value must not be null nor undefined")}async function*s(e){const t=e.getReader();try{for(;;){const{done:e,value:s}=await t.read();if(e)return;i(s),yield s}}finally{t.releaseLock()}}Object.defineProperty(e,"__esModule",{value:!0}),e.ensureAsyncIterable=e.asyncIterableFromStream=e.isAsyncIterable=void 0,e.isAsyncIterable=t,e.asyncIterableFromStream=s,e.ensureAsyncIterable=function(e){return t(e)?e:s(e)}}}),b=o({"node_modules/@msgpack/msgpack/dist/decodeAsync.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.decodeStream=e.decodeMultiStream=e.decodeArrayStream=e.decodeAsync=void 0;var t=g(),i=U(),s=E();function n(e,n=s.defaultDecodeOptions){const r=(0,i.ensureAsyncIterable)(e);return new t.Decoder(n.extensionCodec,n.context,n.maxStrLength,n.maxBinLength,n.maxArrayLength,n.maxMapLength,n.maxExtLength).decodeStream(r)}e.decodeAsync=async function(e,n=s.defaultDecodeOptions){const r=(0,i.ensureAsyncIterable)(e);return new t.Decoder(n.extensionCodec,n.context,n.maxStrLength,n.maxBinLength,n.maxArrayLength,n.maxMapLength,n.maxExtLength).decodeAsync(r)},e.decodeArrayStream=function(e,n=s.defaultDecodeOptions){const r=(0,i.ensureAsyncIterable)(e);return new t.Decoder(n.extensionCodec,n.context,n.maxStrLength,n.maxBinLength,n.maxArrayLength,n.maxMapLength,n.maxExtLength).decodeArrayStream(r)},e.decodeMultiStream=n,e.decodeStream=function(e,t=s.defaultDecodeOptions){return n(e,t)}}}),x=o({"node_modules/@msgpack/msgpack/dist/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.decodeTimestampExtension=e.encodeTimestampExtension=e.decodeTimestampToTimeSpec=e.encodeTimeSpecToTimestamp=e.encodeDateToTimeSpec=e.EXT_TIMESTAMP=e.ExtData=e.ExtensionCodec=e.Encoder=e.DataViewIndexOutOfBoundsError=e.DecodeError=e.Decoder=e.decodeStream=e.decodeMultiStream=e.decodeArrayStream=e.decodeAsync=e.decodeMulti=e.decode=e.encode=void 0;var t=y();Object.defineProperty(e,"encode",{enumerable:!0,get:function(){return t.encode}});var i=E();Object.defineProperty(e,"decode",{enumerable:!0,get:function(){return i.decode}}),Object.defineProperty(e,"decodeMulti",{enumerable:!0,get:function(){return i.decodeMulti}});var s=b();Object.defineProperty(e,"decodeAsync",{enumerable:!0,get:function(){return s.decodeAsync}}),Object.defineProperty(e,"decodeArrayStream",{enumerable:!0,get:function(){return s.decodeArrayStream}}),Object.defineProperty(e,"decodeMultiStream",{enumerable:!0,get:function(){return s.decodeMultiStream}}),Object.defineProperty(e,"decodeStream",{enumerable:!0,get:function(){return s.decodeStream}});var n=g();Object.defineProperty(e,"Decoder",{enumerable:!0,get:function(){return n.Decoder}}),Object.defineProperty(e,"DataViewIndexOutOfBoundsError",{enumerable:!0,get:function(){return n.DataViewIndexOutOfBoundsError}});var r=h();Object.defineProperty(e,"DecodeError",{enumerable:!0,get:function(){return r.DecodeError}});var o=p();Object.defineProperty(e,"Encoder",{enumerable:!0,get:function(){return o.Encoder}});var c=f();Object.defineProperty(e,"ExtensionCodec",{enumerable:!0,get:function(){return c.ExtensionCodec}});var a=d();Object.defineProperty(e,"ExtData",{enumerable:!0,get:function(){return a.ExtData}});var l=u();Object.defineProperty(e,"EXT_TIMESTAMP",{enumerable:!0,get:function(){return l.EXT_TIMESTAMP}}),Object.defineProperty(e,"encodeDateToTimeSpec",{enumerable:!0,get:function(){return l.encodeDateToTimeSpec}}),Object.defineProperty(e,"encodeTimeSpecToTimestamp",{enumerable:!0,get:function(){return l.encodeTimeSpecToTimestamp}}),Object.defineProperty(e,"decodeTimestampToTimeSpec",{enumerable:!0,get:function(){return l.decodeTimestampToTimeSpec}}),Object.defineProperty(e,"encodeTimestampExtension",{enumerable:!0,get:function(){return l.encodeTimestampExtension}}),Object.defineProperty(e,"decodeTimestampExtension",{enumerable:!0,get:function(){return l.decodeTimestampExtension}})}}),T=class extends Error{constructor(e){super(e),this.name=this.constructor.name,Object.setPrototypeOf(this,new.target.prototype)}},v=class extends T{},D="undefined"!=typeof process&&process.release&&"node"===process.release.name;if(globalThis.document);else if(globalThis.importScripts);else if(!D)throw new T("Cannot determine runtime environment");var S,_,A,I=(S=x(),A=null!=S?e(n(S)):{},((e,n,o,c)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let o of s(n))r.call(e,o)||void 0===o||t(e,o,{get:()=>n[o],enumerable:!(c=i(n,o))||c.enumerable});return e})(!_&&S&&S.__esModule?A:t(A,"default",{value:S,enumerable:!0}),S)),O={};self.addEventListener("install",(function(){console.log("webR service worker installed"),self.skipWaiting()})),self.addEventListener("activate",(function(e){console.log("webR service worker activating"),e.waitUntil(self.clients.claim())})),self.addEventListener("fetch",(function(e){if(!/__wasm__\/webr-fetch-request\//.exec(e.request.url))return!1;const t=e.request.arrayBuffer().then((async e=>{const t=(0,I.decode)(e);return await async function(e,t){const i=await self.clients.get(e);if(!i)throw new v("Service worker client not found");t in O||(O[t]=function(){const e={resolve:e=>{},reject:e=>{},promise:null},t=new Promise(((t,i)=>{e.resolve=t,e.reject=i}));return e.promise=t,e}(),i.postMessage({type:"request",data:t}));const s=await O[t].promise;return new Response((0,I.encode)(s),{headers:{"Cross-Origin-Embedder-Policy":"require-corp"}})}(t.clientId,t.uuid)}));return e.waitUntil(t),e.respondWith(t),!0})),self.addEventListener("message",(function(e){switch(e.data.type){case"register-client-main":{self.clients.claim();const t=e.source;self.clients.get(t.id).then((e=>{if(!e)throw new v("Can't respond to client in service worker message handler");e.postMessage({type:"registration-successful",clientId:t.id})}));break}case"wasm-webr-fetch-response":e.data.uuid in O&&(O[e.data.uuid].resolve(e.data.response),delete O[e.data.uuid]);break;default:return!1}return!0}))})();