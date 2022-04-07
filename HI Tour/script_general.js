(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"start":"this.init()","scrollBarColor":"#000000","overflow":"hidden","height":"100%","backgroundOpacity":1,"desktopMipmappingEnabled":false,"defaultVRPointer":"laser","paddingLeft":0,"paddingRight":0,"mouseWheelEnabled":true,"vrPolyfillScale":0.75,"backgroundColorDirection":"vertical","scrollBarWidth":10,"propagateClick":false,"layout":"absolute","toolTipHorizontalAlign":"center","scrollBarMargin":2,"mobileMipmappingEnabled":false,"class":"Player","width":"100%","backgroundPreloadEnabled":true,"mediaActivationMode":"window","backgroundColor":["#FFFFFF"],"borderRadius":0,"paddingTop":0,"scrollBarVisible":"rollOver","gap":10,"minHeight":20,"backgroundColorRatios":[0],"paddingBottom":0,"minWidth":20,"borderSize":0,"id":"rootPlayer","shadow":false,"scripts":{"translate":TDV.Tour.Script.translate,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlays":TDV.Tour.Script.getOverlays,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getKey":TDV.Tour.Script.getKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"mixObject":TDV.Tour.Script.mixObject,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"init":TDV.Tour.Script.init,"historyGoBack":TDV.Tour.Script.historyGoBack,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initQuiz":TDV.Tour.Script.initQuiz,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isPanorama":TDV.Tour.Script.isPanorama,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"cloneCamera":TDV.Tour.Script.cloneCamera,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizFinish":TDV.Tour.Script.quizFinish,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizStart":TDV.Tour.Script.quizStart,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setValue":TDV.Tour.Script.setValue,"registerKey":TDV.Tour.Script.registerKey,"getPixels":TDV.Tour.Script.getPixels,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setLocale":TDV.Tour.Script.setLocale,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clone":TDV.Tour.Script.clone},"contentOpaque":false,"verticalAlign":"top","scrollBarOpacity":0.5,"downloadEnabled":false,"children":["this.MainViewer"],"horizontalAlign":"left","data":{"name":"Player475","defaultLocale":"en","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"speechOnTooltip":false}},"definitions": [{"id":"mainPlayList","class":"PlayList","items":[{"media":"this.panorama_0ED9A512_0557_8078_4176_83F0755CD40F","camera":"this.panorama_0ED9A512_0557_8078_4176_83F0755CD40F_camera","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')"}]},{"hoverFactor":0,"automaticZoomSpeed":10,"initialSequence":"this.sequence_0FC628C0_0557_81D8_4192_06E3FC2D0E14","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_0ED9A512_0557_8078_4176_83F0755CD40F_camera","class":"PanoramaCamera"},{"toolTipShadowVerticalLength":0,"playbackBarOpacity":1,"displayTooltipInSurfaceSelection":true,"subtitlesTextShadowVerticalLength":1,"paddingLeft":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBackgroundColor":"#F6F6F6","paddingRight":0,"class":"ViewerArea","toolTipPaddingRight":6,"playbackBarProgressBorderRadius":0,"progressBackgroundOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarRight":0,"playbackBarHeadBorderSize":0,"toolTipFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesFontSize":"3vmin","toolTipDisplayTime":600,"playbackBarBorderRadius":0,"subtitlesTop":0,"toolTipPaddingLeft":6,"subtitlesPaddingBottom":5,"toolTipBorderRadius":3,"playbackBarProgressBorderColor":"#000000","toolTipShadowBlurRadius":3,"subtitlesBackgroundOpacity":0.2,"borderRadius":0,"playbackBarHeadShadow":true,"toolTipShadowSpread":0,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"minHeight":50,"paddingTop":0,"subtitlesTextShadowBlurRadius":0,"paddingBottom":0,"minWidth":100,"subtitlesTextDecoration":"none","toolTipTextShadowColor":"#000000","transitionDuration":500,"playbackBarHeadBorderRadius":0,"toolTipPaddingTop":4,"progressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeight":10,"progressRight":0,"progressBarBackgroundColorDirection":"vertical","progressOpacity":1,"progressBarBorderColor":"#000000","subtitlesFontFamily":"Arial","playbackBarProgressOpacity":1,"subtitlesShadow":false,"subtitlesOpacity":1,"toolTipFontWeight":"normal","progressBackgroundColorDirection":"vertical","subtitlesPaddingTop":5,"progressBarBackgroundColorRatios":[0],"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"subtitlesBackgroundColor":"#000000","subtitlesGap":0,"subtitlesHorizontalAlign":"center","playbackBarHeadOpacity":1,"progressBorderColor":"#000000","toolTipShadowHorizontalLength":0,"subtitlesVerticalAlign":"bottom","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","subtitlesBorderSize":0,"toolTipShadowOpacity":1,"progressBarOpacity":1,"subtitlesTextShadowOpacity":1,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"playbackBarBottom":5,"subtitlesEnabled":true,"playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"propagateClick":false,"progressHeight":10,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipHorizontalAlign":"center","playbackBarHeadWidth":6,"toolTipBorderSize":1,"toolTipPaddingBottom":4,"progressBarBorderRadius":0,"progressBorderSize":0,"width":"100%","progressBarBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","surfaceReticleOpacity":0.6,"toolTipBorderColor":"#767676","subtitlesPaddingLeft":5,"playbackBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderSize":0,"displayTooltipInTouchScreens":true,"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesPaddingRight":5,"subtitlesFontWeight":"normal","subtitlesBottom":50,"translationTransitionDuration":1000,"firstTransitionDuration":0,"surfaceReticleColor":"#FFFFFF","toolTipFontStyle":"normal","playbackBarBackgroundColorDirection":"vertical","borderSize":0,"toolTipOpacity":1,"toolTipTextShadowBlurRadius":3,"progressLeft":0,"shadow":false,"surfaceReticleSelectionColor":"#FFFFFF","id":"MainViewer","subtitlesTextShadowHorizontalLength":1,"playbackBarLeft":0,"vrPointerSelectionTime":2000,"toolTipTextShadowOpacity":0,"playbackBarHeadHeight":15,"progressBorderRadius":0,"vrPointerColor":"#FFFFFF","data":{"name":"Main Viewer"},"toolTipFontColor":"#606060","doubleClickAction":"toggle_fullscreen","transitionMode":"blending","playbackBarBorderColor":"#FFFFFF","playbackBarHeadShadowColor":"#000000","height":"100%"},{"gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","class":"PanoramaPlayer","surfaceSelectionEnabled":false,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","zoomEnabled":true,"aaEnabled":true},{"thumbnailUrl":"media/panorama_0ED9A512_0557_8078_4176_83F0755CD40F_t.jpg","label":trans('panorama_0ED9A512_0557_8078_4176_83F0755CD40F.label'),"frames":[{"cube":{"levels":[{"url":"media/panorama_0ED9A512_0557_8078_4176_83F0755CD40F_0/{face}/0/{row}_{column}.jpg","rowCount":1,"height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","colCount":6,"width":3072}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0ED9A512_0557_8078_4176_83F0755CD40F_t.jpg"}],"class":"Panorama","hfovMin":"150%","hfov":360,"partial":false,"vfov":180,"id":"panorama_0ED9A512_0557_8078_4176_83F0755CD40F","pitch":0,"data":{"label":"Screen Shot 2022-02-17 at 5.36.26 PM"},"hfovMax":130},{"restartMovementOnUserInteraction":false,"id":"sequence_0FC628C0_0557_81D8_4192_06E3FC2D0E14","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=http://localhost:9000/script_device_v2022.0.21.js.map
})();
//Generated with v2022.0.21, Thu Apr 7 2022