//% weight=100 color=#C0392B icon=AB
namespace text {
    /**
     * add text and use positions
     */
    //% block
    export function text(text: string, font: number, x: number, y: number): void {
        let textSprite = textsprite.create(text)

        textSprite.setMaxFontHeight(font)

        textSprite.setPosition(x, y)
    }
}
