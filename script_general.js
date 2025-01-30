(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
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
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
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
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer","this.IconButton_A775C28E_B352_1D69_41D5_17EBD1871DEF"],"propagateClick":false,"id":"rootPlayer","data":{"displayTooltipInTouchScreens":true,"defaultLocale":"es","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false},"history":{},"name":"Player2732","locales":{"es":"locale/es.txt"}},"backgroundColor":["#FFFFFF"],"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_A775C28E_B352_1D69_41D5_17EBD1871DEF], 'cardboardAvailable')","scrollBarColor":"#000000","scrollBarMargin":2,"layout":"absolute","defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"minWidth":0,"scripts":{"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getOverlays":TDV.Tour.Script.getOverlays,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"textToSpeech":TDV.Tour.Script.textToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"clone":TDV.Tour.Script.clone,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizFinish":TDV.Tour.Script.quizFinish,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"initQuiz":TDV.Tour.Script.initQuiz,"openLink":TDV.Tour.Script.openLink,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizStart":TDV.Tour.Script.quizStart,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"downloadFile":TDV.Tour.Script.downloadFile,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setValue":TDV.Tour.Script.setValue,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"existsKey":TDV.Tour.Script.existsKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPixels":TDV.Tour.Script.getPixels,"unregisterKey":TDV.Tour.Script.unregisterKey,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cloneBindings":TDV.Tour.Script.cloneBindings,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"historyGoForward":TDV.Tour.Script.historyGoForward,"quizShowScore":TDV.Tour.Script.quizShowScore,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"init":TDV.Tour.Script.init,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"toggleVR":TDV.Tour.Script.toggleVR,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"startMeasurement":TDV.Tour.Script.startMeasurement,"disableVR":TDV.Tour.Script.disableVR,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"enableVR":TDV.Tour.Script.enableVR,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getKey":TDV.Tour.Script.getKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"createTween":TDV.Tour.Script.createTween,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"shareSocial":TDV.Tour.Script.shareSocial,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"translate":TDV.Tour.Script.translate,"isPanorama":TDV.Tour.Script.isPanorama,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setLocale":TDV.Tour.Script.setLocale},"gap":10,"height":"100%","hash": "e5584e4dbe0a50858425e5d50e990f1582649c03189f7102cdcb756d45f2d574", "definitions": [{"items":[{"player":"this.MainViewerVideoPlayer","media":"this.video_AE5308E2_B372_0ED9_41E1_DFF6B14F7B74","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_A97A66C5_B2D2_02DB_41DD_2BBF44A4F233, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A97A66C5_B2D2_02DB_41DD_2BBF44A4F233, 0)","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}],"class":"PlayList","id":"playList_A97A66C5_B2D2_02DB_41DD_2BBF44A4F233"},{"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"playbackBarBottom":5,"toolTipPaddingTop":4,"progressOpacity":0.7,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingBottom":4,"playbackBarHeight":10,"progressRight":"33%","playbackBarHeadWidth":6,"subtitlesTextShadowHorizontalLength":1,"playbackBarProgressBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarRight":0,"progressBarBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBottom":50,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowColor":"#000000","progressBorderColor":"#000000","subtitlesGap":0,"playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColor":["#3399FF"],"vrThumbstickRotationStep":20,"subtitlesBackgroundColor":"#000000","subtitlesFontSize":"3vmin","toolTipShadowColor":"#333138","progressBackgroundColor":["#000000"],"progressBottom":10,"class":"ViewerArea","subtitlesBorderColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"toolTipPaddingLeft":6,"vrPointerColor":"#FFFFFF","progressBarBorderRadius":2,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderSize":0,"playbackBarBorderColor":"#FFFFFF","propagateClick":false,"progressHeight":2,"id":"MainViewer","subtitlesTextShadowOpacity":1,"toolTipBorderColor":"#767676","playbackBarProgressBorderColor":"#000000","firstTransitionDuration":0,"toolTipTextShadowColor":"#000000","progressBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","playbackBarBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadBorderRadius":0,"toolTipFontColor":"#606060","progressBorderRadius":2,"progressLeft":"33%","playbackBarHeadShadowBlurRadius":3,"playbackBarBackgroundOpacity":1,"playbackBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarLeft":0,"minHeight":50,"toolTipPaddingRight":6,"playbackBarHeadBorderColor":"#000000","minWidth":100,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","height":"100%","playbackBarHeadShadow":true,"progressBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","width":"100%"},{"thumbnailUrl":"media/video_AECD5432_B372_05BE_41E5_EC7F749E97F2_t.webp","label":trans('video_AECD5432_B372_05BE_41E5_EC7F749E97F2.label'),"id":"video_AECD5432_B372_05BE_41E5_EC7F749E97F2","video":"this.videores_AECB00F8_B372_3EA9_41DF_85AAF21E12B5","width":464,"height":1208,"data":{"label":"Ale export V2"},"class":"Video"},{"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"initialSequence":"this.sequence_BECF0BCF_B2D2_02E6_419E_7B98EFDF9D29","class":"PanoramaCamera","id":"panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA_camera","enterPointingToHorizon":true},{"thumbnailUrl":"media/video_BCBD433C_B2DE_03A9_41E0_E43EE61DC46C_t.webp","label":trans('video_BCBD433C_B2DE_03A9_41E0_E43EE61DC46C.label'),"id":"video_BCBD433C_B2DE_03A9_41E0_E43EE61DC46C","video":"this.videores_BC0BF664_B2D6_05D9_41B5_B47FB4963BFF","width":484,"height":692,"data":{"label":"Martha export"},"class":"Video"},{"thumbnailUrl":"media/panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA_t.webp","class":"Panorama","label":trans('panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA.label'),"adjacentPanoramas":[{"data":{"overlayID":"overlay_ABFF5D06_B2D2_0759_41E3_41949D022A0A"},"panorama":"this.panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E","distance":18.39,"class":"AdjacentPanorama","yaw":-96.98,"select":"this.overlay_ABFF5D06_B2D2_0759_41E3_41949D022A0A.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":15360,"url":"media/panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA_0/{face}/0/{row}_{column}.webp","colCount":30,"height":2560,"class":"TiledImageResourceLevel","rowCount":5},{"tags":"ondemand","width":9216,"url":"media/panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA_0/{face}/1/{row}_{column}.webp","colCount":18,"height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"tags":"ondemand","width":6144,"url":"media/panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1}]},"thumbnailUrl":"media/panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA_t.webp"}],"hfovMax":130,"id":"panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA","data":{"label":"6 Modulo"},"vfov":180,"hfov":360,"overlays":["this.overlay_A3343FA6_B2D2_02A6_41E3_2ECAC464749B","this.overlay_ABFF5D06_B2D2_0759_41E3_41949D022A0A"]},{"thumbnailUrl":"media/video_AE5308E2_B372_0ED9_41E1_DFF6B14F7B74_t.webp","label":trans('video_AE5308E2_B372_0ED9_41E1_DFF6B14F7B74.label'),"id":"video_AE5308E2_B372_0ED9_41E1_DFF6B14F7B74","video":"this.videores_AEFF89AE_B372_0EA6_41E6_D5AB88A6DBDD","width":366,"height":696,"data":{"label":"Ale V3"},"class":"Video"},{"items":[{"player":"this.MainViewerVideoPlayer","media":"this.video_BCBD433C_B2DE_03A9_41E0_E43EE61DC46C","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_A97A16C5_B2D2_02DB_41D8_5F8DAC2D761F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A97A16C5_B2D2_02DB_41D8_5F8DAC2D761F, 0)","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}],"class":"PlayList","id":"playList_A97A16C5_B2D2_02DB_41D8_5F8DAC2D761F"},{"items":["this.PanoramaPlayListItem_A976C724_B2D2_0359_41D9_B6A36183B586","this.PanoramaPlayListItem_A9768724_B2D2_0359_41D0_49C5983C260A"],"class":"PlayList","id":"mainPlayList"},{"thumbnailUrl":"media/panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E_t.webp","class":"Panorama","label":trans('panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E.label'),"adjacentPanoramas":[{"data":{"overlayID":"overlay_ABEF3D86_B2D2_0766_41C3_C4CF2EA9205C"},"panorama":"this.panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA","distance":37.64,"class":"AdjacentPanorama","yaw":135.63,"select":"this.overlay_ABEF3D86_B2D2_0766_41C3_C4CF2EA9205C.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"tags":"ondemand","width":15360,"url":"media/panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E_0/{face}/0/{row}_{column}.webp","colCount":30,"height":2560,"class":"TiledImageResourceLevel","rowCount":5},{"tags":"ondemand","width":9216,"url":"media/panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E_0/{face}/1/{row}_{column}.webp","colCount":18,"height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"tags":"ondemand","width":6144,"url":"media/panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"class":"TiledImageResourceLevel","rowCount":1}]},"thumbnailUrl":"media/panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E_t.webp"}],"hfovMax":130,"id":"panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E","data":{"label":"5 Entrada Direccion"},"vfov":180,"hfov":360,"overlays":["this.overlay_ADA6C27E_B352_FDA9_41C1_8165FC4CB6A0","this.overlay_ABEF3D86_B2D2_0766_41C3_C4CF2EA9205C"]},{"class":"VideoPlayer","displayPlayOverlay":true,"viewerArea":"this.MainViewer","displayPlaybackBar":true,"clickAction":"play_pause","id":"MainViewerVideoPlayer"},{"touchControlMode":"drag_rotation","buttonCardboardView":"this.IconButton_A775C28E_B352_1D69_41D5_17EBD1871DEF","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","viewerArea":"this.MainViewer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer"},{"items":[{"player":"this.MainViewerVideoPlayer","media":"this.video_AECD5432_B372_05BE_41E5_EC7F749E97F2","start":"this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.MainViewerVideoPlayer.set('displayPlayOverlay', true); this.MainViewerVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_A97A76C5_B2D2_02DB_41E2_A3CE87E20D48, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_A97A76C5_B2D2_02DB_41E2_A3CE87E20D48, 0)","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)"}],"class":"PlayList","id":"playList_A97A76C5_B2D2_02DB_41E2_A3CE87E20D48"},{"verticalAlign":"middle","propagateClick":false,"id":"IconButton_A775C28E_B352_1D69_41D5_17EBD1871DEF","right":"7.76%","tabIndex":0,"maxHeight":86,"maxWidth":76,"data":{"name":"IconButton7357"},"minHeight":1,"minWidth":1,"bottom":"8.6%","width":76,"height":90,"backgroundOpacity":0,"iconURL":"skin/IconButton_A775C28E_B352_1D69_41D5_17EBD1871DEF.png","class":"IconButton","horizontalAlign":"center"},{"initialPosition":{"pitch":-4.45,"class":"PanoramaCameraPosition","yaw":164.79},"initialSequence":"this.sequence_AFDB5FA0_B35E_0359_41D2_DC03191F0DC4","class":"PanoramaCamera","id":"panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E_camera","enterPointingToHorizon":true},{"class":"VideoResource","width":464,"id":"videores_AECB00F8_B372_3EA9_41DF_85AAF21E12B5","levels":["this.videolevel_A9A285F0_B2D2_06B9_41D5_E9E32D4DD9D3"],"height":1208},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_BECF0BCF_B2D2_02E6_419E_7B98EFDF9D29"},{"class":"VideoResource","width":484,"id":"videores_BC0BF664_B2D6_05D9_41B5_B47FB4963BFF","levels":["this.videolevel_A9A4358D_B2D2_076B_41D3_0840355670D3"],"height":692},{"toolTip":trans('overlay_A3343FA6_B2D2_02A6_41E3_2ECAC464749B.toolTip'),"distance":50,"cues":[],"vertices":[{"pitch":15.57,"class":"PanoramaPoint","yaw":-14.66},{"pitch":15.68,"class":"PanoramaPoint","yaw":28.57},{"pitch":-44.66,"class":"PanoramaPoint","yaw":36.79},{"pitch":-44.71,"class":"PanoramaPoint","yaw":-22.8}],"useHandCursor":true,"id":"overlay_A3343FA6_B2D2_02A6_41E3_2ECAC464749B","video":"this.videores_BC0BF664_B2D6_05D9_41B5_B47FB4963BFF","data":{"label":"Video"},"image":"this.res_A0F6E12B_B2D2_3FAF_41E2_21D80D9ABCA7","click":"if(this.overlay_A3343FA6_B2D2_02A6_41E3_2ECAC464749B.get('state') != 'playing'){ this.overlay_A3343FA6_B2D2_02A6_41E3_2ECAC464749B.play(); } else { this.overlay_A3343FA6_B2D2_02A6_41E3_2ECAC464749B.pause(); }","class":"QuadVideoPanoramaOverlay"},{"data":{"label":"Circle Arrow 04","hasPanoramaAction":true},"maps":[],"items":[{"pitch":-5.27,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_A97C1641_B2D2_05DA_41E0_1142CF9C7C80","yaw":-96.98,"distance":100,"hfov":6.82,"vfov":8.13,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 04"}}],"areas":["this.HotspotPanoramaOverlayArea_ABEFDD0E_B2D2_0766_41E5_3F655A56D9BE"],"enabledInCardboard":true,"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_ABFF5D06_B2D2_0759_41E3_41949D022A0A"},{"class":"VideoResource","width":366,"id":"videores_AEFF89AE_B372_0EA6_41E6_D5AB88A6DBDD","levels":["this.videolevel_A9A5C5CB_B2D2_06EF_41C4_EB9801D8D98C"],"height":696},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E_camera","media":"this.panorama_AE7AC470_B35E_05B9_41E6_0A43E0A9D71E","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","id":"PanoramaPlayListItem_A976C724_B2D2_0359_41D9_B6A36183B586"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA_camera","media":"this.panorama_BF503094_B2D2_1D79_41DC_97C5A82745AA","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","id":"PanoramaPlayListItem_A9768724_B2D2_0359_41D0_49C5983C260A"},{"toolTip":trans('overlay_ADA6C27E_B352_FDA9_41C1_8165FC4CB6A0.toolTip'),"distance":50,"cues":[],"vertices":[{"pitch":18.77,"class":"PanoramaPoint","yaw":151.17},{"pitch":19.09,"class":"PanoramaPoint","yaw":-175.02},{"pitch":-43.64,"class":"PanoramaPoint","yaw":-169.51},{"pitch":-43.55,"class":"PanoramaPoint","yaw":145.72}],"useHandCursor":true,"id":"overlay_ADA6C27E_B352_FDA9_41C1_8165FC4CB6A0","video":"this.videores_AEFF89AE_B372_0EA6_41E6_D5AB88A6DBDD","data":{"label":"Video"},"image":"this.res_AE04904F_B352_1DE7_41D4_3E468BCE82CC","click":"if(this.overlay_ADA6C27E_B352_FDA9_41C1_8165FC4CB6A0.get('state') != 'playing'){ this.overlay_ADA6C27E_B352_FDA9_41C1_8165FC4CB6A0.play(); } else { this.overlay_ADA6C27E_B352_FDA9_41C1_8165FC4CB6A0.pause(); }","class":"QuadVideoPanoramaOverlay"},{"data":{"label":"Circle Arrow 04","hasPanoramaAction":true},"maps":[],"items":[{"pitch":-2.58,"scaleMode":"fit_inside","image":"this.AnimatedImageResource_A97CC641_B2D2_05DA_41D5_AE3989721570","yaw":135.63,"distance":100,"hfov":10.5,"vfov":10.5,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 04"}}],"areas":["this.HotspotPanoramaOverlayArea_AB988D8E_B2D2_0766_41E2_6DB2FDE9C5FA"],"enabledInCardboard":true,"useHandCursor":true,"class":"HotspotPanoramaOverlay","id":"overlay_ABEF3D86_B2D2_0766_41C3_C4CF2EA9205C"},{"movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_AFDB5FA0_B35E_0359_41D2_DC03191F0DC4"},{"width":464,"url":trans('videolevel_A9A285F0_B2D2_06B9_41D5_E9E32D4DD9D3.url'),"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_A9A285F0_B2D2_06B9_41D5_E9E32D4DD9D3.posterURL'),"height":1208,"framerate":30,"class":"VideoResourceLevel","bitrate":1261,"id":"videolevel_A9A285F0_B2D2_06B9_41D5_E9E32D4DD9D3"},{"width":484,"url":trans('videolevel_A9A4358D_B2D2_076B_41D3_0840355670D3.url'),"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_A9A4358D_B2D2_076B_41D3_0840355670D3.posterURL'),"height":692,"framerate":30,"class":"VideoResourceLevel","bitrate":753,"id":"videolevel_A9A4358D_B2D2_076B_41D3_0840355670D3"},{"class":"ImageResource","id":"res_A0F6E12B_B2D2_3FAF_41E2_21D80D9ABCA7","levels":[{"width":484,"url":"media/res_A0F6E12B_B2D2_3FAF_41E2_21D80D9ABCA7_0.webp","height":692,"class":"ImageResourceLevel"}]},{"finalFrame":"first","frameCount":24,"frameDuration":41,"colCount":4,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_A97C1641_B2D2_05DA_41E0_1142CF9C7C80","levels":[{"width":800,"url":"media/res_AB56BD38_B2D2_07AA_41E6_D45CB4A221C8_0.webp","height":1200,"class":"ImageResourceLevel"}]},{"displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A976C724_B2D2_0359_41D9_B6A36183B586, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_ABEFDD0E_B2D2_0766_41E5_3F655A56D9BE"},{"width":366,"url":trans('videolevel_A9A5C5CB_B2D2_06EF_41C4_EB9801D8D98C.url'),"codec":"h264","type":"video/mp4","posterURL":trans('videolevel_A9A5C5CB_B2D2_06EF_41C4_EB9801D8D98C.posterURL'),"height":696,"framerate":30,"class":"VideoResourceLevel","bitrate":573,"id":"videolevel_A9A5C5CB_B2D2_06EF_41C4_EB9801D8D98C"},{"class":"ImageResource","id":"res_AE04904F_B352_1DE7_41D4_3E468BCE82CC","levels":[{"width":366,"url":"media/res_AE04904F_B352_1DE7_41D4_3E468BCE82CC_0.webp","height":696,"class":"ImageResourceLevel"}]},{"finalFrame":"first","frameCount":24,"frameDuration":41,"colCount":4,"rowCount":6,"class":"AnimatedImageResource","id":"AnimatedImageResource_A97CC641_B2D2_05DA_41D5_AE3989721570","levels":[{"width":800,"url":"media/res_AB56BD38_B2D2_07AA_41E6_D45CB4A221C8_0.webp","height":1200,"class":"ImageResourceLevel"}]},{"displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_A9768724_B2D2_0359_41D0_49C5983C260A, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_AB988D8E_B2D2_0766_41E2_6DB2FDE9C5FA"}],"width":"100%","class":"Player","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.3, Thu Jan 30 2025