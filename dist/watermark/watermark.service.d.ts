export declare class WatermarkService {
    private readonly fontBase64;
    private generateWatermarkSvg;
    applyWatermark(imageBuffer: Buffer): Promise<Buffer>;
}
