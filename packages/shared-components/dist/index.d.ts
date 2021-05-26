import * as vue from 'vue';
import { PropType } from 'vue';
import Processor from 'windicss';
import * as _codemirror_state from '@codemirror/state';

declare const _default$1: vue.DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    language: {
        type: StringConstructor;
        default: string;
    };
    options: ObjectConstructor;
    processor: PropType<Processor>;
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ("update:modelValue" | "editorDidMount")[], "update:modelValue" | "editorDidMount", vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<{
    modelValue: string;
    language: string;
} & {
    options?: Record<string, any> | undefined;
    processor?: Processor | undefined;
}>, {
    language: string;
}>;

declare const _default: vue.DefineComponent<{
    dark: {
        type: BooleanConstructor;
        default: boolean;
    };
    css: {
        type: StringConstructor;
        default: string;
    };
    fixedCss: {
        type: StringConstructor;
        default: string;
    };
    classes: {
        type: StringConstructor;
        default: string;
    };
    html: {
        type: StringConstructor;
        default: string;
    };
}, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, Record<string, any>, string, vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps, Readonly<{
    html: string;
    dark: boolean;
    css: string;
    fixedCss: string;
    classes: string;
} & {}>, {
    html: string;
    dark: boolean;
    css: string;
    fixedCss: string;
    classes: string;
}>;

declare const basicSetup: _codemirror_state.Extension[];
declare const hoverPreview: (processor: Processor) => _codemirror_state.Extension[];

export { _default$1 as Editor, _default as IframePreview, basicSetup, hoverPreview };
