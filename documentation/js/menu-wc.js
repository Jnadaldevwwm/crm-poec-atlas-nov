'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">crm-poec-atlas-nov documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-894513efc77798544f329e5b34ddef236b1259f752d37adda261b2da0a90d1f1060f7df848985b40429865331a9c74cb806df1d7b304e5c42300290d77446b43"' : 'data-target="#xs-components-links-module-AppModule-894513efc77798544f329e5b34ddef236b1259f752d37adda261b2da0a90d1f1060f7df848985b40429865331a9c74cb806df1d7b304e5c42300290d77446b43"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-894513efc77798544f329e5b34ddef236b1259f752d37adda261b2da0a90d1f1060f7df848985b40429865331a9c74cb806df1d7b304e5c42300290d77446b43"' :
                                            'id="xs-components-links-module-AppModule-894513efc77798544f329e5b34ddef236b1259f752d37adda261b2da0a90d1f1060f7df848985b40429865331a9c74cb806df1d7b304e5c42300290d77446b43"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-b15728c19ae0cbcd395a82b34d08bb392c623b4378ad6b154f0c5d3f85876e318b9ec39aeb977ffcf26b04c6f82fd706b85fac88aa34b6cf65b542edbb83afbe"' : 'data-target="#xs-components-links-module-CoreModule-b15728c19ae0cbcd395a82b34d08bb392c623b4378ad6b154f0c5d3f85876e318b9ec39aeb977ffcf26b04c6f82fd706b85fac88aa34b6cf65b542edbb83afbe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-b15728c19ae0cbcd395a82b34d08bb392c623b4378ad6b154f0c5d3f85876e318b9ec39aeb977ffcf26b04c6f82fd706b85fac88aa34b6cf65b542edbb83afbe"' :
                                            'id="xs-components-links-module-CoreModule-b15728c19ae0cbcd395a82b34d08bb392c623b4378ad6b154f0c5d3f85876e318b9ec39aeb977ffcf26b04c6f82fd706b85fac88aa34b6cf65b542edbb83afbe"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-01ca5a4482744e1df176208e1d5dcd1cc720dfcdb01ea2799fe40a88e06164e0580b23a27dedacccc4d9fa7e50d9a81bc724a5a43e0c3de4e57e3e0b34355444"' : 'data-target="#xs-components-links-module-IconsModule-01ca5a4482744e1df176208e1d5dcd1cc720dfcdb01ea2799fe40a88e06164e0580b23a27dedacccc4d9fa7e50d9a81bc724a5a43e0c3de4e57e3e0b34355444"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-01ca5a4482744e1df176208e1d5dcd1cc720dfcdb01ea2799fe40a88e06164e0580b23a27dedacccc4d9fa7e50d9a81bc724a5a43e0c3de4e57e3e0b34355444"' :
                                            'id="xs-components-links-module-IconsModule-01ca5a4482744e1df176208e1d5dcd1cc720dfcdb01ea2799fe40a88e06164e0580b23a27dedacccc4d9fa7e50d9a81bc724a5a43e0c3de4e57e3e0b34355444"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDayModeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDayModeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconListClientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconListItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconListItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconListUsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconListUsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNightModeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNightModeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' : 'data-target="#xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' :
                                            'id="xs-components-links-module-TemplatesModule-0568e9be7f70e757663c22742f28b83cd20c67a0dcb907d33c317e349955abd2085afd2df04353d828c7d024a46bd41f5ef848374d09ed33bd0b8764e0d290e7"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-d0ba395b217bec1386f5979737dd7ec8f20c9c9341da4a69d97e35f9186196d0d8e5b6f6eb1459727c9e5b77827b8436aae94b0bb1aa3eb27690285f61b7c125"' : 'data-target="#xs-components-links-module-UiModule-d0ba395b217bec1386f5979737dd7ec8f20c9c9341da4a69d97e35f9186196d0d8e5b6f6eb1459727c9e5b77827b8436aae94b0bb1aa3eb27690285f61b7c125"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-d0ba395b217bec1386f5979737dd7ec8f20c9c9341da4a69d97e35f9186196d0d8e5b6f6eb1459727c9e5b77827b8436aae94b0bb1aa3eb27690285f61b7c125"' :
                                            'id="xs-components-links-module-UiModule-d0ba395b217bec1386f5979737dd7ec8f20c9c9341da4a69d97e35f9186196d0d8e5b6f6eb1459727c9e5b77827b8436aae94b0bb1aa3eb27690285f61b7c125"' }>
                                            <li class="link">
                                                <a href="components/Ui2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Ui2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});