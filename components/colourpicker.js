class ColourPicker {
    constructor(container, onChange, options = new ColourPickerOptions()) {
        this.container = container;
        this.onChange = onChange;
        this.options = options;
        if (this.container == null)
            throw new Error('Colour Picker Error: specified container is null.');
        if (this.onChange == null)
            throw new Error('Colour Picker Error: specified onChange callback is null.');
        const docFragment = document.createDocumentFragment();
        this.CreateColourField();
        this.colourFieldMarker = this.colourField.querySelector('.colour-field__marker');
        docFragment.appendChild(this.colourField);
        this.CreateHueSlider();
        this.hueSliderHandle = this.hueSlider.querySelector('.hue-slider__handle');
        docFragment.appendChild(this.hueSlider);
        const valueInputContainer = this.CreateValueInputs();
        docFragment.appendChild(valueInputContainer);
        this.colourPreview = document.createElement('div');
        docFragment.appendChild(this.colourPreview);
        this.container.classList.add('colour-picker');
        this.container.appendChild(docFragment);
        this.container.addEventListener('mousedown', (evt) => { this.ColourFieldMouseDown(evt); });
        const initialColour = this.options.initialColour;
        this.UpdateHexInput(initialColour.GetHex());
        this.UpdateRGBAInput(initialColour.GetRGBA());
        window.setTimeout(() => {
            this.UpdateColourField(initialColour.GetHSV(), initialColour.ToCssString());
        }, 0);
    }
    GetColour() {
        return new Colour(this.GetRGBAFromInputs());
    }
    SetColour(colour) {
        this.UpdateHexInput(colour.GetHex());
        this.UpdateRGBAInput(colour.GetRGBA());
        window.setTimeout(() => {
            this.UpdateColourField(colour.GetHSV(), colour.ToCssString());
        }, 0);
    }
    CreateColourField() {
        this.colourField = document.createElement('div');
        this.colourField.classList.add('colour-field');
        const lightnessGradient = document.createElement('div');
        lightnessGradient.classList.add('colour-field__lightness');
        this.colourField.appendChild(lightnessGradient);
        this.fieldMarker = document.createElement('div');
        this.fieldMarker.classList.add('colour-field__marker');
        this.colourField.appendChild(this.fieldMarker);
    }
    ColourFieldMouseDown(evt) {
        if (evt.target !== this.colourField && evt.target !== this.fieldMarker)
            return;
        this.colourField.style.cursor = 'none';
        const hsv = this.SetColourFieldHSV(evt);
        this.OnChange(hsv);
        const mouseMoveCallback = (event) => {
            const newHSV = this.SetColourFieldHSV(event);
            this.OnChange(newHSV);
            event.preventDefault();
        };
        const mouseUpCallback = () => {
            this.colourField.style.cursor = 'default';
            window.removeEventListener('mousemove', mouseMoveCallback);
            window.removeEventListener('mouseup', mouseUpCallback);
        };
        window.addEventListener('mousemove', mouseMoveCallback);
        window.addEventListener('mouseup', mouseUpCallback);
        evt.preventDefault();
    }
    GetColourFieldHSV(x, y) {
        const colourFieldBoundingBox = this.colourField.getBoundingClientRect();
        return {
            H: this.hueSliderHandle.offsetLeft / this.hueSlider.clientWidth,
            S: x / colourFieldBoundingBox.width,
            V: 1 - y / colourFieldBoundingBox.height,
        };
    }
    SetColourFieldHSV(evt) {
        const colourFieldBoundingBox = this.colourField.getBoundingClientRect();
        let mouseX = Math.max(evt.clientX, colourFieldBoundingBox.left);
        mouseX = Math.min(mouseX, colourFieldBoundingBox.right);
        let mouseY = Math.max(evt.clientY, colourFieldBoundingBox.top);
        mouseY = Math.min(mouseY, colourFieldBoundingBox.bottom);
        const colourFieldX = mouseX - colourFieldBoundingBox.left;
        const colourFieldY = mouseY - colourFieldBoundingBox.top;
        return this.GetColourFieldHSV(colourFieldX, colourFieldY);
    }
    CreateHueSlider() {
        this.hueSlider = document.createElement('div');
        this.hueSlider.classList.add('hue-slider');
        const hueSliderGradient = document.createElement('div');
        hueSliderGradient.classList.add('hue-slider__gradient');
        this.hueSlider.appendChild(hueSliderGradient);
        hueSliderGradient.addEventListener('mousedown', (evt) => { this.HueSliderMouseDown(evt); });
        const hueSliderHandle = document.createElement('div');
        hueSliderHandle.classList.add('hue-slider__handle');
        this.hueSlider.appendChild(hueSliderHandle);
    }
    HueSliderMouseDown(evt) {
        this.UpdateHueSliderHandle(evt);
        const markerX = this.colourFieldMarker.offsetLeft + this.colourFieldMarker.offsetWidth / 2;
        const markerY = this.colourFieldMarker.offsetTop + this.colourFieldMarker.offsetHeight / 2;
        const hsv = this.GetColourFieldHSV(markerX, markerY);
        this.OnChange(hsv);
        window.getSelection().removeAllRanges();
        const mouseMoveCallback = (event) => {
            this.UpdateHueSliderHandle(event);
            const newMarkerX = this.colourFieldMarker.offsetLeft + this.colourFieldMarker.offsetWidth / 2;
            const newMarkerY = this.colourFieldMarker.offsetTop + this.colourFieldMarker.offsetHeight / 2;
            const newHSV = this.GetColourFieldHSV(newMarkerX, newMarkerY);
            this.OnChange(newHSV);
            event.preventDefault();
        };
        const mouseUpCallback = () => {
            window.removeEventListener('mousemove', mouseMoveCallback);
            window.removeEventListener('mouseup', mouseUpCallback);
        };
        window.addEventListener('mousemove', mouseMoveCallback);
        window.addEventListener('mouseup', mouseUpCallback);
        evt.preventDefault();
    }
    UpdateHueSliderHandle(evt) {
        const hueSliderBoundingBox = this.hueSlider.getBoundingClientRect();
        let mouseX = Math.max(evt.clientX, hueSliderBoundingBox.left);
        mouseX = Math.min(mouseX, hueSliderBoundingBox.right);
        this.hueSliderHandle.style.left = mouseX - hueSliderBoundingBox.left + 'px';
    }
    CreateValueInputs() {
        const valueInputContainer = document.createElement('div');
        valueInputContainer.classList.add('colour-inputs');
        const hexInputItem = this.CreateHexInput();
        valueInputContainer.appendChild(hexInputItem);
        this.hexInput.addEventListener('keypress', () => {
            requestAnimationFrame(() => {
                let strippedValue = this.hexInput.value.replace(/[^0-9ABCDEF]/gi, '');
                strippedValue = '#' + strippedValue.substr(0, 8);
                this.hexInput.value = strippedValue;
                this.OnChange(strippedValue);
            });
        });
        const rInputItem = this.CreateIntegerInput(cpEnumRGBA.Red, this.options.redInputLabel);
        this.redInput = rInputItem.querySelector('input');
        valueInputContainer.appendChild(rInputItem);
        this.redInput.addEventListener('keypress', () => {
            requestAnimationFrame(() => {
                this.redInput.value = this.redInput.value.replace(/[^0-9]/g, '');
                this.OnChange(this.GetRGBAFromInputs());
            });
        });
        const gInputItem = this.CreateIntegerInput(cpEnumRGBA.Green, this.options.greenInputLabel);
        this.greenInput = gInputItem.querySelector('input');
        valueInputContainer.appendChild(gInputItem);
        this.greenInput.addEventListener('keypress', () => {
            requestAnimationFrame(() => {
                this.greenInput.value = this.greenInput.value.replace(/[^0-9]/g, '');
                this.OnChange(this.GetRGBAFromInputs());
            });
        });
        const bInputItem = this.CreateIntegerInput(cpEnumRGBA.Blue, this.options.blueInputLabel);
        this.blueInput = bInputItem.querySelector('input');
        valueInputContainer.appendChild(bInputItem);
        this.blueInput.addEventListener('keypress', () => {
            requestAnimationFrame(() => {
                this.blueInput.value = this.blueInput.value.replace(/[^0-9]/g, '');
                this.OnChange(this.GetRGBAFromInputs());
            });
        });
        if (this.options.showAlphaControl) {
            const aInputItem = this.CreateIntegerInput(cpEnumRGBA.Alpha, this.options.alphaInputLabel);
            this.alphaInput = aInputItem.querySelector('input');
            valueInputContainer.appendChild(aInputItem);
            this.alphaInput.addEventListener('keypress', () => {
                requestAnimationFrame(() => {
                    this.alphaInput.value = this.alphaInput.value.replace(/[^0-9]/g, '');
                    this.OnChange(this.GetRGBAFromInputs());
                });
            });
        }
        return valueInputContainer;
    }
    GetRGBAFromInputs() {
        let r = Math.round(parseInt(this.redInput.value, 10));
        r = Math.max(Math.min(r, 255), 0);
        let g = Math.round(parseInt(this.greenInput.value, 10));
        g = Math.max(Math.min(g, 255), 0);
        let b = Math.round(parseInt(this.blueInput.value, 10));
        b = Math.max(Math.min(b, 255), 0);
        let a = Math.round(this.alphaInput != null ? parseInt(this.alphaInput.value, 10) : 100);
        a = Math.max(Math.min(a, 100), 0);
        if (isNaN(r) || isNaN(g) || isNaN(b) || isNaN(a))
            return null;
        return { R: r, G: g, B: b, A: a };
    }
    CreateHexInput() {
        const hexInputContainer = document.createElement('div');
        hexInputContainer.classList.add('colour-input');
        this.hexInput = document.createElement('input');
        this.hexInput.classList.add('colour-input__hex');
        this.hexInput.setAttribute("spellcheck", "false");
        hexInputContainer.appendChild(this.hexInput);
        const hexInputLbl = document.createElement('span');
        hexInputLbl.classList.add('colour-input__lbl');
        hexInputLbl.innerText = this.options.hexInputLabel;
        hexInputContainer.appendChild(hexInputLbl);
        return hexInputContainer;
    }
    CreateIntegerInput(inputType, label) {
        const intInputContainer = document.createElement('div');
        intInputContainer.classList.add('colour-input');
        const intInput = document.createElement('input');
        intInput.classList.add('colour-input__int--' + inputType);
        intInputContainer.appendChild(intInput);
        const intInputLbl = document.createElement('span');
        intInputLbl.classList.add('colour-input__lbl');
        intInputLbl.innerText = label;
        intInputLbl.style.cursor = 'ew-resize';
        intInputLbl.addEventListener('mousedown', (evt) => {
            const maxValue = inputType === cpEnumRGBA.Alpha ? 100 : 255;
            this.IntegerInputMouseDown(evt, intInput, maxValue);
        });
        intInputContainer.appendChild(intInputLbl);
        return intInputContainer;
    }
    IntegerInputMouseDown(evt, intInput, maxValue) {
        const baseInt = parseInt(intInput.value, 10);
        const baseX = evt.clientX;
        const mouseMoveCallback = (event) => {
            const intChange = Math.floor((event.clientX - baseX) / 2);
            const newValue = Math.max(Math.min(baseInt + intChange, maxValue), 0);
            intInput.value = newValue.toString();
            this.OnChange({
                R: parseInt(this.redInput.value, 10),
                G: parseInt(this.greenInput.value, 10),
                B: parseInt(this.blueInput.value, 10),
                A: this.alphaInput != null ? parseInt(this.alphaInput.value, 10) : 100,
            });
            event.preventDefault();
        };
        const mouseUpCallback = () => {
            window.removeEventListener('mousemove', mouseMoveCallback);
            window.removeEventListener('mouseup', mouseUpCallback);
        };
        window.addEventListener('mousemove', mouseMoveCallback);
        window.addEventListener('mouseup', mouseUpCallback);
        evt.preventDefault();
    }
    OnChange(colour) {
        if (colour == null)
            return false;
        const newColour = new Colour();
        if (typeof colour === 'string') {
            if (!newColour.SetHex(colour))
                return false;
            if (this.options.showAlphaControl && newColour.GetRGBA().A === null)
                newColour.SetAlpha(parseInt(this.alphaInput.value, 10));
            this.UpdateHexInput(colour);
            this.UpdateRGBAInput(newColour.GetRGBA());
            this.UpdateColourField(newColour.GetHSV(), newColour.ToCssString());
        }
        else if (colour.hasOwnProperty('R')) {
            newColour.SetRGBA(colour);
            this.UpdateHexInput(newColour.GetHex());
            this.UpdateRGBAInput(colour);
            this.UpdateColourField(newColour.GetHSV(), newColour.ToCssString());
        }
        else if (colour.hasOwnProperty('H')) {
            newColour.SetHSV(colour);
            if (this.options.showAlphaControl)
                newColour.SetAlpha(parseInt(this.alphaInput.value, 10));
            this.UpdateHexInput(newColour.GetHex());
            this.UpdateRGBAInput(newColour.GetRGBA());
            this.UpdateColourField(colour, newColour.ToCssString());
        }
        this.onChange(newColour);
        return true;
    }
    UpdateHexInput(hex) {
        this.hexInput.value = hex;
    }
    UpdateRGBAInput(rgba) {
        this.redInput.value = rgba.R.toString();
        this.greenInput.value = rgba.G.toString();
        this.blueInput.value = rgba.B.toString();
        if (this.alphaInput != null)
            this.alphaInput.value = rgba.A.toString();
    }
    UpdateColourField(hsv, cssString) {
        const markerBoundingBox = this.colourFieldMarker.getBoundingClientRect();
        this.colourFieldMarker.style.left = `calc(${(hsv.S * 100)}% - ${markerBoundingBox.width / 2}px)`;
        this.colourFieldMarker.style.bottom = `calc(${(hsv.V * 100)}% - ${markerBoundingBox.height / 2}px)`;
        this.colourFieldMarker.style.backgroundColor = cssString;
        this.hueSliderHandle.style.left = (hsv.H * 100) + '%';
        const hueHex = new Colour({ H: hsv.H, S: 1, V: 1 }).GetHex();
        this.colourField.style.background = `linear-gradient(to right, #FFF, ${hueHex})`;
    }
}
class ColourPickerOptions {
    constructor() {
        this.initialColour = new Colour({ R: 255, G: 0, B: 0, A: 100 });
        this.showAlphaControl = false;
        this.hexInputLabel = 'Hex';
        this.redInputLabel = 'R';
        this.greenInputLabel = 'G';
        this.blueInputLabel = 'B';
        this.alphaInputLabel = 'A';
    }
}
class Colour {
    constructor(colour) {
        this.R = 255;
        this.G = 255;
        this.B = 255;
        this.A = 100;
        if (colour != null) {
            if (colour instanceof String || typeof colour === 'string')
                this.SetHex(colour);
            else if (colour.hasOwnProperty('R'))
                this.SetRGBA(colour);
            else if (colour.hasOwnProperty('H'))
                this.SetHSV(colour);
        }
    }
    SetRGBA(rgba) {
        this.R = rgba.R;
        this.G = rgba.G;
        this.B = rgba.B;
        this.A = rgba.A;
    }
    SetAlpha(alpha) {
        this.A = alpha;
    }
    SetHex(hex) {
        if (hex.length === 0)
            return false;
        if (hex[0] === '#')
            hex = hex.substring(1);
        if (hex.length === 3)
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        if (hex.length === 6 || hex.length === 8) {
            this.R = parseInt(hex.substr(0, 2), 16);
            this.G = parseInt(hex.substr(2, 2), 16);
            this.B = parseInt(hex.substr(4, 2), 16);
            if (hex.length === 8) {
                const parsedInt = parseInt(hex.substr(6, 2), 16);
                this.A = Math.round(parsedInt / 2.55);
            }
            else {
                this.A = null;
            }
        }
        else {
            return false;
        }
        return true;
    }
    SetHSV(hsv) {
        const hueSector = Math.floor(hsv.H * 6);
        const hueSectorOffset = hsv.H * 6 - hueSector;
        let p = hsv.V * (1 - hsv.S);
        p = Math.round(p * 255);
        let q = hsv.V;
        if (hueSector % 2 === 0)
            q *= (1 - (1 - hueSectorOffset) * hsv.S);
        else
            q *= 1 - hueSectorOffset * hsv.S;
        q = Math.round(q * 255);
        const v = Math.round(hsv.V * 255);
        switch (hueSector % 6) {
            case 0:
                this.R = v, this.G = q, this.B = p;
                break;
            case 1:
                this.R = q, this.G = v, this.B = p;
                break;
            case 2:
                this.R = p, this.G = v, this.B = q;
                break;
            case 3:
                this.R = p, this.G = q, this.B = v;
                break;
            case 4:
                this.R = q, this.G = p, this.B = v;
                break;
            case 5:
                this.R = v, this.G = p, this.B = q;
                break;
            default:
                this.R = 0;
                this.G = 0;
                this.B = 0;
        }
    }
    ToCssString(includeAlpha = false) {
        let str = includeAlpha ? 'rgba(' : 'rgb(';
        str += this.R + ', ' + this.G + ', ' + this.B;
        str += includeAlpha ? ', ' + this.A + '%)' : ')';
        return str;
    }
    GetRGBA() {
        return { R: this.R, G: this.G, B: this.B, A: this.A };
    }
    GetHex(includeAlpha = false) {
        let hex = '#' + this.DecimalToHex(this.R) + this.DecimalToHex(this.G) + this.DecimalToHex(this.B);
        hex += includeAlpha ? this.DecimalToHex(this.A * 2.55) : '';
        return hex;
    }
    GetHSV() {
        const r = this.R / 255;
        const g = this.G / 255;
        const b = this.B / 255;
        const hsv = { H: 0, S: 0, V: 0 };
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;
        hsv.V = max;
        hsv.S = max === 0 ? 0 : delta / max;
        if (r === max) {
            const deltaOffset = g < b ? 6 : 0;
            hsv.H = (delta + deltaOffset === 0) ? 0 : (g - b) / delta + deltaOffset;
        }
        else if (g === max) {
            hsv.H = (b - r) / delta + 2;
        }
        else if (b === max) {
            hsv.H = (r - g) / delta + 4;
        }
        hsv.H = hsv.H / 6;
        return hsv;
    }
    DecimalToHex(decimal) {
        const hex = decimal.toString(16).toUpperCase();
        return hex.length === 1 ? '0' + hex : hex;
    }
}
var cpEnumRGBA;
(function (cpEnumRGBA) {
    cpEnumRGBA["Red"] = "r";
    cpEnumRGBA["Green"] = "g";
    cpEnumRGBA["Blue"] = "b";
    cpEnumRGBA["Alpha"] = "a";
})(cpEnumRGBA || (cpEnumRGBA = {}));
export default ColourPicker;
//# sourceMappingURL=colourpicker.js.map