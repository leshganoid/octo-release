/* tslint:disable */
/* eslint-disable */
export function main(): void;
export function ZSTD_endStream(a: number, b: number): number;
export function ZSTD_compressStream(a: number, b: number, c: number): number;
export function ZSTD_decompressStream(a: number, b: number, c: number): number;
export function ZSTD_isError(a: number): number;
export function ZSTD_versionNumber(): number;
export function ZSTD_versionString(): number;
export function ZSTD_minCLevel(): number;
export function ZSTD_maxCLevel(): number;
export function ZSTD_getDecompressedSize(a: number, b: number): number;
export function ZSTD_compressBound(a: number): number;
export function ZSTD_createCCtx(): number;
export function ZSTD_initCStream(a: number, b: number): number;
export function ZSTD_CCtx_loadDictionary(a: number, b: number, c: number): number;
export function ZSTD_CCtx_refCDict(a: number, b: number): number;
export function ZSTD_CCtx_refPrefix(a: number, b: number, c: number): number;
export function ZSTD_sizeof_CCtx(a: number): number;
export function ZSTD_CCtx_reset(a: number, b: number): number;
export function ZSTD_CCtx_setParameter(a: number, b: number, c: number): number;
export function ZSTD_CCtx_setPledgedSrcSize(a: number, b: number): number;
export function ZSTD_freeCCtx(a: number): number;
export function ZSTD_getErrorName(a: number): number;
export function ZSTD_compressCCtx(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function ZSTD_compress2(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_createDCtx(): number;
export function ZSTD_initDStream(a: number): number;
export function ZSTD_DCtx_reset(a: number, b: number): number;
export function ZSTD_DCtx_loadDictionary(a: number, b: number, c: number): number;
export function ZSTD_DCtx_refDDict(a: number, b: number): number;
export function ZSTD_DCtx_refPrefix(a: number, b: number, c: number): number;
export function ZSTD_DCtx_setParameter(a: number, b: number, c: number): number;
export function ZSTD_sizeof_DCtx(a: number): number;
export function ZSTD_freeDCtx(a: number): number;
export function ZSTD_decompressDCtx(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_compress_usingDict(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function ZSTD_decompress_usingDict(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function ZSTD_createCDict(a: number, b: number, c: number): number;
export function ZSTD_sizeof_CDict(a: number): number;
export function ZSTD_getDictID_fromCDict(a: number): number;
export function ZSTD_freeCDict(a: number): number;
export function ZSTD_compress_usingCDict(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function ZSTD_createDDict(a: number, b: number): number;
export function ZSTD_sizeof_DDict(a: number): number;
export function ZSTD_getDictID_fromDDict(a: number): number;
export function ZSTD_freeDDict(a: number): number;
export function ZSTD_decompress_usingDDict(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function ZSTD_CStreamInSize(): number;
export function ZSTD_CStreamOutSize(): number;
export function ZSTD_DStreamInSize(): number;
export function ZSTD_DStreamOutSize(): number;
export function ZSTD_findFrameCompressedSize(a: number, b: number): number;
export function ZSTD_getFrameContentSize(a: number, b: number): number;
export function ZSTD_getDictID_fromDict(a: number, b: number): number;
export function ZSTD_getDictID_fromFrame(a: number, b: number): number;
export function rust_zstd_wasm_shim_malloc(a: number): number;
export function rust_zstd_wasm_shim_calloc(a: number, b: number): number;
export function rust_zstd_wasm_shim_free(a: number): void;
export function rust_zstd_wasm_shim_memcpy(a: number, b: number, c: number): number;
export function rust_zstd_wasm_shim_memmove(a: number, b: number, c: number): number;
export function rust_zstd_wasm_shim_memset(a: number, b: number, c: number): number;
export function ZSTD_createCCtx_advanced(a: number): number;
export function ZSTD_initStaticCCtx(a: number, b: number): number;
export function ZSTD_sizeof_CStream(a: number): number;
export function ZSTD_createCCtxParams(): number;
export function ZSTD_freeCCtxParams(a: number): number;
export function ZSTD_CCtxParams_reset(a: number): number;
export function ZSTD_CCtxParams_init(a: number, b: number): number;
export function ZSTD_CCtxParams_init_advanced(a: number, b: number): number;
export function ZSTD_checkCParams(a: number): number;
export function ZSTD_cParam_getBounds(a: number, b: number): void;
export function ZSTD_CCtxParams_setParameter(a: number, b: number, c: number): number;
export function ZSTD_CCtx_getParameter(a: number, b: number, c: number): number;
export function ZSTD_CCtxParams_getParameter(a: number, b: number, c: number): number;
export function ZSTD_CCtx_setParametersUsingCCtxParams(a: number, b: number): number;
export function ZSTD_CCtx_loadDictionary_advanced(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_CCtx_loadDictionary_byReference(a: number, b: number, c: number): number;
export function ZSTD_CCtx_refThreadPool(a: number, b: number): number;
export function ZSTD_CCtx_refPrefix_advanced(a: number, b: number, c: number, d: number): number;
export function ZSTD_adjustCParams(a: number, b: number, c: number, d: number): void;
export function ZSTD_estimateCCtxSize_usingCCtxParams(a: number): number;
export function ZSTD_estimateCCtxSize_usingCParams(a: number): number;
export function ZSTD_estimateCCtxSize(a: number): number;
export function ZSTD_estimateCStreamSize_usingCCtxParams(a: number): number;
export function ZSTD_estimateCStreamSize_usingCParams(a: number): number;
export function ZSTD_estimateCStreamSize(a: number): number;
export function ZSTD_getFrameProgression(a: number, b: number): void;
export function ZSTD_toFlushNow(a: number): number;
export function ZSTD_copyCCtx(a: number, b: number, c: number): number;
export function ZSTD_generateSequences(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_compressStream2(a: number, b: number, c: number, d: number): number;
export function ZSTD_mergeBlockDelimiters(a: number, b: number): number;
export function ZSTD_writeSkippableFrame(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_compressContinue(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_getBlockSize(a: number): number;
export function ZSTD_compressBlock(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_compressBegin_advanced(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_compressBegin_usingDict(a: number, b: number, c: number, d: number): number;
export function ZSTD_compressBegin(a: number, b: number): number;
export function ZSTD_compressEnd(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_compress_advanced(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function ZSTD_compress(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_estimateCDictSize_advanced(a: number, b: number, c: number): number;
export function ZSTD_estimateCDictSize(a: number, b: number): number;
export function ZSTD_createCDict_advanced(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function ZSTD_createCDict_advanced2(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function ZSTD_createCDict_byReference(a: number, b: number, c: number): number;
export function ZSTD_initStaticCDict(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function ZSTD_compressBegin_usingCDict_advanced(a: number, b: number, c: number, d: number): number;
export function ZSTD_compressBegin_usingCDict(a: number, b: number): number;
export function ZSTD_compress_usingCDict_advanced(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function ZSTD_createCStream(): number;
export function ZSTD_createCStream_advanced(a: number): number;
export function ZSTD_initStaticCStream(a: number, b: number): number;
export function ZSTD_freeCStream(a: number): number;
export function ZSTD_resetCStream(a: number, b: number): number;
export function ZSTD_initCStream_usingCDict_advanced(a: number, b: number, c: number, d: number): number;
export function ZSTD_initCStream_usingCDict(a: number, b: number): number;
export function ZSTD_initCStream_advanced(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_initCStream_usingDict(a: number, b: number, c: number, d: number): number;
export function ZSTD_initCStream_srcSize(a: number, b: number, c: number): number;
export function ZSTD_compressStream2_simpleArgs(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
export function ZSTD_compressSequences(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function ZSTD_flushStream(a: number, b: number): number;
export function ZSTD_defaultCLevel(): number;
export function ZSTD_getCParams(a: number, b: number, c: number, d: number): void;
export function ZSTD_getParams(a: number, b: number, c: number, d: number): void;
export function ZSTD_createDDict_advanced(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_createDDict_byReference(a: number, b: number): number;
export function ZSTD_initStaticDDict(a: number, b: number, c: number, d: number, e: number, f: number): number;
export function ZSTD_estimateDDictSize(a: number, b: number): number;
export function ZSTD_estimateDCtxSize(): number;
export function ZSTD_initStaticDCtx(a: number, b: number): number;
export function ZSTD_createDCtx_advanced(a: number): number;
export function ZSTD_copyDCtx(a: number, b: number): void;
export function ZSTD_isFrame(a: number, b: number): number;
export function ZSTD_isSkippableFrame(a: number, b: number): number;
export function ZSTD_frameHeaderSize(a: number, b: number): number;
export function ZSTD_getFrameHeader_advanced(a: number, b: number, c: number, d: number): number;
export function ZSTD_getFrameHeader(a: number, b: number, c: number): number;
export function ZSTD_readSkippableFrame(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_findDecompressedSize(a: number, b: number): number;
export function ZSTD_decompressBound(a: number, b: number): number;
export function ZSTD_insertBlock(a: number, b: number, c: number): number;
export function ZSTD_decompressBegin_usingDict(a: number, b: number, c: number): number;
export function ZSTD_decompress(a: number, b: number, c: number, d: number): number;
export function ZSTD_nextSrcSizeToDecompress(a: number): number;
export function ZSTD_nextInputType(a: number): number;
export function ZSTD_decompressContinue(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_decompressBegin(a: number): number;
export function ZSTD_decompressBegin_usingDDict(a: number, b: number): number;
export function ZSTD_createDStream(): number;
export function ZSTD_initStaticDStream(a: number, b: number): number;
export function ZSTD_createDStream_advanced(a: number): number;
export function ZSTD_freeDStream(a: number): number;
export function ZSTD_DCtx_loadDictionary_advanced(a: number, b: number, c: number, d: number, e: number): number;
export function ZSTD_DCtx_loadDictionary_byReference(a: number, b: number, c: number): number;
export function ZSTD_DCtx_refPrefix_advanced(a: number, b: number, c: number, d: number): number;
export function ZSTD_initDStream_usingDict(a: number, b: number, c: number): number;
export function ZSTD_initDStream_usingDDict(a: number, b: number): number;
export function ZSTD_resetDStream(a: number): number;
export function ZSTD_DCtx_setMaxWindowSize(a: number, b: number): number;
export function ZSTD_dParam_getBounds(a: number, b: number): void;
export function ZSTD_DCtx_setFormat(a: number, b: number): number;
export function ZSTD_DCtx_getParameter(a: number, b: number, c: number): number;
export function ZSTD_sizeof_DStream(a: number): number;
export function ZSTD_decodingBufferSize_min(a: number, b: number): number;
export function ZSTD_estimateDStreamSize(a: number): number;
export function ZSTD_estimateDStreamSize_fromFrame(a: number, b: number): number;
export function ZSTD_decompressStream_simpleArgs(a: number, b: number, c: number, d: number, e: number, f: number, g: number): number;
export function ZSTD_decompressBlock(a: number, b: number, c: number, d: number, e: number): number;
export function wasm_thread_entry_point(a: number): void;
export const memory: WebAssembly.Memory;
export function __wbindgen_malloc(a: number): number;
export function __wbindgen_realloc(a: number, b: number, c: number): number;
export const __wbindgen_export_3: WebAssembly.Table;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h1d3cb7f5c583e4e7(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h64ec74994d3725b7(a: number, b: number): void;
export function _dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hec4fbb1c7b54694a(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h23686ce32ac3a80c(a: number, b: number, c: number): void;
export function _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0ab07c3cd07b865e(a: number, b: number, c: number): void;
export function __wbindgen_exn_store(a: number): void;
export function __wbindgen_free(a: number, b: number): void;
export function __wbindgen_thread_destroy(): void;
export function __wbindgen_start(): void;
