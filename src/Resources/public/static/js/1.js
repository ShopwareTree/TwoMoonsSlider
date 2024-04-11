(this["webpackJsonpPlugintwo-moons-slider"]=this["webpackJsonpPlugintwo-moons-slider"]||[]).push([[1],{"47vQ":function(e,n,t){var o=t("chpj");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("P8hj").default)("76a6509a",o,!0,{})},GiFg:function(e,n,t){"use strict";t.r(n);t("47vQ");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return(n=function(e){var n=function(e,n){if("object"!==o(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var l=t.call(e,n||"default");if("object"!==o(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===o(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var r=Shopware.Mixin,c=Shopware.Data,a=c.Criteria,d=c.EntityCollection;n.default={template:'\n{% block sw_cms_element_twslider_config %}\n    <div class="sw-cms-el-config-twslider">\n        \n        {% block sw_cms_element_twslider_config_tabs %}\n        <sw-tabs\n            position-identifier="sw-cms-element-config-twslider"\n            class="sw-cms-el-config-twslider__tabs"\n            default-item="content"\n        >\n            <template #default="{ active }">\n                \n                {% block sw_cms_element_twslider_config_tab_content %}\n                <sw-tabs-item\n                    :title="$tc(\'sw-cms.elements.general.config.tab.content\')"\n                    name="content"\n                    :active-tab="active"\n                >\n                    {{ $tc(\'sw-cms.elements.general.config.tab.content\') }}\n                </sw-tabs-item>\n                {% endblock %}\n                \n                {% block sw_cms_element_twslider_config_tab_options %}\n                <sw-tabs-item\n                    :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n                    name="settings"\n                    :active-tab="active"\n                >\n                    {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n                </sw-tabs-item>\n                {% endblock %}\n            </template>\n    \n            <template\n                #content="{ active }"\n            >\n                \n                {% block sw_cms_element_twslider_config_content %}\n                <sw-container\n                    v-if="active === \'content\'"\n                    class="sw-cms-el-config-twslider__tab-content"\n                >\n                    \n                    {% block sw_cms_element_twslider_config_content_title %}\n                    <sw-text-field\n                        {% if VUE3 %}\n                        v-model:value="element.config.title.value"\n                        {% else %}\n                        v-model="element.config.title.value"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.productSlider.config.label.title\')"\n                        :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.title\')"\n                    />\n                    {% endblock %}\n    \n                    \n                    {% block sw_cms_element_twslider_config_content_product_assignment_type %}\n                    <sw-single-select\n                        {% if VUE3 %}\n                        v-model:value="element.config.products.source"\n                        {% else %}\n                        v-model="element.config.products.source"\n                        {% endif %}\n                        class="sw-cms-el-config-twslider__product-assignment-type-select"\n                        :label="$tc(\'sw-cms.elements.productSlider.config.label.productAssignmentType\')"\n                        :options="productAssignmentTypes"\n                        show-clearable-button\n                        {% if VUE3 %}\n                        @update:value="onChangeAssignmentType"\n                        {% else %}\n                        @change="onChangeAssignmentType"\n                        {% endif %}\n                    />\n                    {% endblock %}\n    \n                    <template v-if="element.config.products.source === \'product_stream\'">\n                        \n                        {% block sw_cms_element_twslider_config_content_product_stream_select %}\n                        <sw-entity-single-select\n                            {% if VUE3 %}\n                            v-model:value="element.config.products.value"\n                            {% else %}\n                            v-model="element.config.products.value"\n                            {% endif %}\n                            entity="product_stream"\n                            class="sw-cms-el-config-twslider__product-stream-select"\n                            :label="$tc(\'sw-cms.elements.productSlider.config.label.productStreamChoice\')"\n                            :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.productStreamChoice\')"\n                            show-clearable-button\n                            {% if VUE3 %}\n                            @update:value="onChangeProductStream"\n                            {% else %}\n                            @change="onChangeProductStream"\n                            {% endif %}\n                        />\n                        {% endblock %}\n    \n                        \n                        {% block sw_cms_element_twslider_config_content_product_stream_performance_hint %}\n                        <sw-alert\n                            class="sw-cms-el-config-twslider__product-stream-performance-hint"\n                            variant="info"\n                        >\n                            {{ $tc(\'sw-cms.elements.productSlider.config.textProductStreamPerformanceHint\') }}\n                        </sw-alert>\n                        {% endblock %}\n    \n                        \n                        {% block sw_cms_element_twslider_config_content_product_stream_preview %}\n                        <sw-modal\n                            v-if="showProductStreamPreview"\n                            :title="productStream.name"\n                            class="sw-cms-el-config-twslider__product-stream-preview-modal"\n                            @modal-close="onCloseProductStreamModal"\n                        >\n                            \n                            {% block sw_cms_element_twslider_config_content_product_stream_preview_grid %}\n                            <sw-product-stream-grid-preview\n                                :filters="productStream.apiFilter"\n                                :columns="productStreamPreviewColumns"\n                                :criteria="productStreamCriteria"\n                            />\n                            {% endblock %}\n                            <template #modal-footer>\n                                \n                                {% block sw_cms_element_twslider_config_content_product_stream_preview_action_close %}\n                                <sw-button\n                                    size="small"\n                                    @click="onCloseProductStreamModal"\n                                >\n                                    {{ $tc(\'global.sw-modal.labelClose\') }}\n                                </sw-button>\n                                {% endblock %}\n                            </template>\n                        </sw-modal>\n                        {% endblock %}\n    \n                        <sw-container\n                            columns="1fr 1fr"\n                            gap="30px"\n                        >\n                            \n                            {% block sw_cms_element_twslider_config_content_product_stream_sorting %}\n                            <sw-single-select\n                                {% if VUE3 %}\n                                v-model:value="element.config.productStreamSorting.value"\n                                {% else %}\n                                v-model="element.config.productStreamSorting.value"\n                                {% endif %}\n                                :label="$tc(\'sw-cms.elements.productSlider.config.label.productStreamSorting\')"\n                                class="sw-cms-el-config-twslider__product-stream-sorting"\n                                :disabled="!productStream"\n                                :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.productStreamSorting\')"\n                                :options="productStreamSortingOptions"\n                                show-clearable-button\n                            />\n                            {% endblock %}\n    \n                            \n                            {% block sw_cms_element_twslider_config_content_product_stream_limit %}\n                            <sw-number-field\n                                {% if VUE3 %}\n                                v-model:value="element.config.productStreamLimit.value"\n                                {% else %}\n                                v-model="element.config.productStreamLimit.value"\n                                {% endif %}\n                                :label="$tc(\'sw-cms.elements.productSlider.config.label.productStreamLimit\')"\n                                class="sw-cms-el-config-twslider__product-stream-limit"\n                                :disabled="!productStream"\n                                :min="1"\n                            />\n                            {% endblock %}\n                        </sw-container>\n    \n                        \n                        {% block sw_cms_element_twslider_config_content_product_stream_preview_link %}\n                        <div class="sw-cms-el-config-twslider__product-stream-preview-link-container">\n                            <a\n                                class="sw-cms-el-config-twslider__product-stream-preview-link link"\n                                :class="{ \'is--disabled\': !productStream }"\n                                href="#"\n                                @click.prevent="onClickProductStreamPreview"\n                            >\n                                {{ $tc(\'sw-cms.elements.productSlider.config.textProductStreamPreviewLink\') }}\n                                <sw-icon\n                                    name="regular-long-arrow-right"\n                                    small\n                                />\n                            </a>\n                        </div>\n                        {% endblock %}\n                    </template>\n    \n                    \n                    {% block sw_cms_element_twslider_config_content_products %}\n                    <sw-entity-multi-select\n                        v-else\n                        {% if VUE3 %}\n                        v-model:entityCollection="productCollection"\n                        {% else %}\n                        v-model="productCollection"\n                        {% endif %}\n                        class="sw-cms-el-config-twslider__products"\n                        :label="$tc(\'sw-cms.elements.productSlider.config.label.selection\')"\n                        :placeholder="$tc(\'sw-cms.elements.productSlider.config.placeholder.selection\')"\n                        :context="productMultiSelectContext"\n                        :criteria="productMediaFilter"\n                        {% if VUE3 %}\n                        @update:entity-collection="onProductsChange"\n                        {% else %}\n                        @change="onProductsChange"\n                        {% endif %}\n                    >\n                        <template #selection-label-property="{ item }">\n                            <sw-product-variant-info\n                                :variations="item.variation"\n                            >\n                                {{ item.translated.name || item.name }}\n                            </sw-product-variant-info>\n                        </template>\n                        <template #result-item="{ item, index }">\n                            <slot\n                                name="result-item"\n                                v-bind="{ item, index }"\n                            >\n                                <sw-select-result\n                                    v-bind="{ item, index, selected: isSelected(item.id)}"\n                                >\n                                    \n                                    {% block sw_entity_single_select_base_results_list_result_label %}\n                                    <span class="sw-select-result__result-item-text">\n                                        <sw-product-variant-info\n                                            :variations="item.variation"\n                                        >\n                                            {{ item.translated.name || item.name }}\n                                        </sw-product-variant-info>\n                                    </span>\n                                    {% endblock %}\n                                </sw-select-result>\n                            </slot>\n                        </template>\n                    </sw-entity-multi-select>\n                    {% endblock %}\n                </sw-container>\n                {% endblock %}\n    \n                \n                {% block sw_cms_element_twslider_config_settings %}\n                <sw-container\n                    v-if="active === \'settings\'"\n                    class="sw-cms-el-config-twslider__tab-settings"\n                >\n    \n                    \n                    {% block sw_cms_element_twslider_config_settings_display_mode %}\n                    <sw-select-field\n                        {% if VUE3 %}\n                        v-model:value="element.config.displayMode.value"\n                        {% else %}\n                        v-model="element.config.displayMode.value"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.general.config.label.displayMode\')"\n                    >\n                        <option value="standard">\n                            {{ $tc(\'sw-cms.elements.general.config.label.displayModeStandard\') }}\n                        </option>\n                        <option value="cover">\n                            {{ $tc(\'sw-cms.elements.general.config.label.displayModeCover\') }}\n                        </option>\n                        <option value="contain">\n                            {{ $tc(\'sw-cms.elements.general.config.label.displayModeContain\') }}\n                        </option>\n                    </sw-select-field>\n                    {% endblock %}\n    \n                    \n                    {% block sw_cms_element_twslider_config_settings_vertical_align %}\n                    <sw-select-field\n                        {% if VUE3 %}\n                        v-model:value="element.config.verticalAlign.value"\n                        {% else %}\n                        v-model="element.config.verticalAlign.value"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                        :placeholder="$tc(\'sw-cms.elements.general.config.label.verticalAlign\')"\n                    >\n                        <option value="flex-start">\n                            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignTop\') }}\n                        </option>\n                        <option value="center">\n                            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignCenter\') }}\n                        </option>\n                        <option value="flex-end">\n                            {{ $tc(\'sw-cms.elements.general.config.label.verticalAlignBottom\') }}\n                        </option>\n                    </sw-select-field>\n                    {% endblock %}\n    \n                    \n                    {% block sw_cms_element_twslider_config_settings_box_layout %}\n                    <sw-select-field\n                        {% if VUE3 %}\n                        v-model:value="element.config.boxLayout.value"\n                        {% else %}\n                        v-model="element.config.boxLayout.value"\n                        {% endif %}\n                        :label="$tc(\'sw-cms.elements.productBox.config.label.layoutType\')"\n                    >\n                        <option value="standard">\n                            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeStandard\') }}\n                        </option>\n                        <option value="image">\n                            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeImage\') }}\n                        </option>\n                        <option value="minimal">\n                            {{ $tc(\'sw-cms.elements.productBox.config.label.layoutTypeMinimal\') }}\n                        </option>\n                    </sw-select-field>\n                    {% endblock %}\n    \n                    \n                    {% block sw_cms_element_twslider_config_settings_navigation %}\n                    <sw-switch-field\n                        {% if VUE3 %}\n                        v-model:value="element.config.navigation.value"\n                        {% else %}\n                        v-model="element.config.navigation.value"\n                        {% endif %}\n                        bordered\n                        :label="$tc(\'sw-cms.elements.productSlider.config.label.navigation\')"\n                    />\n                    {% endblock %}\n\n\n                    \n                    {% block sw_cms_element_twslider_config_settings_navigation_mobile %}\n                        <sw-switch-field\n                            {% if VUE3 %}\n                            v-model:value="element.config.navigationmobile.value"\n                            {% else %}\n                            v-model="element.config.navigationmobile.value"\n                            {% endif %}\n                            bordered\n                            :label="\'Navigation Mobile\'"\n                        />\n                    {% endblock %}\n                </sw-container>\n                {% endblock %}\n            </template>\n        </sw-tabs>\n        {% endblock %}\n    </div>\n    {% endblock %}',inject:["repositoryFactory","feature"],mixins:[r.getByName("cms-element")],data:function(){return{productCollection:null,productStream:null,showProductStreamPreview:!1,tempProductIds:[],tempStreamId:null}},computed:{productRepository:function(){return this.repositoryFactory.create("product")},productStreamRepository:function(){return this.repositoryFactory.create("product_stream")},products:function(){var e,n;return null!==(e=this.element)&&void 0!==e&&null!==(n=e.data)&&void 0!==n&&n.products&&this.element.data.products.length>0?this.element.data.products:null},productMediaFilter:function(){var e=new a(1,25);return e.addAssociation("cover"),e.addAssociation("options.group"),e},productMultiSelectContext:function(){var e=i({},Shopware.Context.api);return e.inheritance=!0,e},productAssignmentTypes:function(){return[{label:this.$tc("sw-cms.elements.productSlider.config.productAssignmentTypeOptions.manual"),value:"static"},{label:this.$tc("sw-cms.elements.productSlider.config.productAssignmentTypeOptions.productStream"),value:"product_stream"}]},productStreamSortingOptions:function(){return[{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.nameAsc"),value:"name:ASC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.nameDesc"),value:"name:DESC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.creationDateAsc"),value:"createdAt:ASC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.creationDateDesc"),value:"createdAt:DESC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.random"),value:"random"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.priceAsc"),value:"cheapestPrice:ASC"},{label:this.$tc("sw-cms.elements.productSlider.config.productStreamSortingOptions.priceDesc"),value:"cheapestPrice:DESC"}]},productStreamCriteria:function(){var e=new a(1,10),n=this.element.config.productStreamSorting.value;if(!n||"random"===n)return e;var t=n.split(":")[0],o=n.split(":")[1];return e.addSorting(a.sort(t,o,!1)),e},productStreamPreviewColumns:function(){return[{property:"name",label:this.$tc("sw-category.base.products.columnNameLabel"),dataIndex:"name",sortable:!1},{property:"manufacturer.name",label:this.$tc("sw-category.base.products.columnManufacturerLabel"),sortable:!1}]}},created:function(){this.createdComponent()},methods:{createdComponent:function(){var e=this;if(this.initElementConfig("twomoons-slider"),this.productCollection=new d("/product","product",Shopware.Context.api),!(this.element.config.products.value.length<=0))if("product_stream"===this.element.config.products.source)this.loadProductStream();else{var n=new a(1,100);n.addAssociation("cover"),n.addAssociation("options.group"),n.setIds(this.element.config.products.value),this.productRepository.search(n,i(i({},Shopware.Context.api),{},{inheritance:!0})).then((function(n){e.productCollection=n}))}},onChangeAssignmentType:function(e){"product_stream"===e?(this.tempProductIds=this.element.config.products.value,this.element.config.products.value=this.tempStreamId):(this.tempStreamId=this.element.config.products.value,this.element.config.products.value=this.tempProductIds)},loadProductStream:function(){var e=this;this.productStreamRepository.get(this.element.config.products.value,Shopware.Context.api,new a(1,25)).then((function(n){e.productStream=n}))},onChangeProductStream:function(e){null!==e?this.loadProductStream():this.productStream=null},onClickProductStreamPreview:function(){null!==this.productStream&&(this.showProductStreamPreview=!0)},onCloseProductStreamModal:function(){this.showProductStreamPreview=!1},onProductsChange:function(){var e;this.element.config.products.value=this.productCollection.getIds(),null!==(e=this.element)&&void 0!==e&&e.data&&this.$set(this.element.data,"products",this.productCollection)},isSelected:function(e){return this.productCollection.has(e)}}}},P8hj:function(e,n,t){"use strict";function o(e,n){for(var t=[],o={},l=0;l<n.length;l++){var i=n[l],s=i[0],r={id:e+":"+l,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(r):t.push(o[s]={id:s,parts:[r]})}return t}t.r(n),t.d(n,"default",(function(){return f}));var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=l&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,a=!1,d=function(){},m=null,u="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(e,n,t,l){a=t,m=l||{};var s=o(e,n);return g(s),function(n){for(var t=[],l=0;l<s.length;l++){var r=s[l];(c=i[r.id]).refs--,t.push(c)}n?g(s=o(e,n)):s=[];for(l=0;l<t.length;l++){var c;if(0===(c=t[l]).refs){for(var a=0;a<c.parts.length;a++)c.parts[a]();delete i[c.id]}}}}function g(e){for(var n=0;n<e.length;n++){var t=e[n],o=i[t.id];if(o){o.refs++;for(var l=0;l<o.parts.length;l++)o.parts[l](t.parts[l]);for(;l<t.parts.length;l++)o.parts.push(v(t.parts[l]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{var s=[];for(l=0;l<t.parts.length;l++)s.push(v(t.parts[l]));i[t.id]={id:t.id,refs:1,parts:s}}}}function w(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function v(e){var n,t,o=document.querySelector("style["+u+'~="'+e.id+'"]');if(o){if(a)return d;o.parentNode.removeChild(o)}if(p){var l=c++;o=r||(r=w()),n=h.bind(null,o,l,!1),t=h.bind(null,o,l,!0)}else o=w(),n=S.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}var _,b=(_=[],function(e,n){return _[e]=n,_.filter(Boolean).join("\n")});function h(e,n,t,o){var l=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(n,l);else{var i=document.createTextNode(l),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(i,s[n]):e.appendChild(i)}}function S(e,n){var t=n.css,o=n.media,l=n.sourceMap;if(o&&e.setAttribute("media",o),m.ssrId&&e.setAttribute(u,n.id),l&&(t+="\n/*# sourceURL="+l.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},chpj:function(e,n,t){}}]);
//# sourceMappingURL=1.js.map