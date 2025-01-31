<!DOCTYPE html>
<!-- saved from url=(0065)https://github.com/RadLikeWhoa/Countable/blob/master/Countable.js -->
<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-a11y-link-underlines="true" data-turbo-loaded="" class="js-focus-visible" data-js-focus-visible=""><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><style type="text/css">.turbo-progress-bar {
  position: fixed;
  display: block;
  top: 0;
  left: 0;
  height: 3px;
  background: #0076ff;
  z-index: 2147483647;
  transition:
    width 300ms ease-out,
    opacity 150ms 150ms ease-in;
  transform: translate3d(0, 0, 0);
}
</style>
    
  
  
  
  
  
  

  

  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/light-7aa84bb7e11e.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/dark-f65db3e8d171.css"><link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-a8258e3c6dda.css"><link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-7e97d834719c.css"><link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-01d869f460be.css"><link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-534f3e971240.css"><link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-a8cc7d138001.css"><link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-35e9dfdc4f9f.css"><link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-cf4cc5f62dfe.css">

    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-primitives-d9abecd14f1e.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-93aded0ee8a1.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/global-d579f4a5b443.css">
    <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/github-8049f990d299.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/repository-4fce88777fa8.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/code-0210be90f4d3.css">

  


  <script type="application/json" id="client-env">{"locale":"en","featureFlags":["bypass_copilot_indexing_quota","copilot_new_references_ui","copilot_beta_features_opt_in","copilot_chat_repo_custom_instructions_preview","copilot_chat_retry_on_error","copilot_chat_persist_submitted_input","copilot_conversational_ux_history_refs","copilot_chat_shared_chat_input","copilot_chat_shared_topic_indicator","copilot_chat_shared_repo_sso_banner","copilot_editor_upsells","copilot_free_limited_user","copilot_implicit_context","copilot_no_floating_button","copilot_smell_icebreaker_ux","drag_and_drop_experimental_move_dialog","experimentation_azure_variant_endpoint","failbot_handle_non_errors","geojson_azure_maps","ghost_pilot_confidence_truncation_25","ghost_pilot_confidence_truncation_40","hovercard_accessibility","issues_advanced_search","issues_react_close_as_duplicate","issues_react_remove_placeholders","issues_react_blur_item_picker_on_close","issues_react_include_bots_in_pickers","marketing_pages_search_explore_provider","react_keyboard_shortcuts_dialog","remove_child_patch","repository_suggester_elastic_search","sample_network_conn_type","issues_react_close_as_duplicate","issues_react_create_milestone","issues_react_cache_fix_workaround","lifecycle_label_name_updates","item_picker_new_select_panel"],"login":"beto77-74"}</script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/wp-runtime-00b6c9dd2759.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover_js-9da652f58479.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_arianotify-polyfill_ariaNotify-polyfill_js-node_modules_github_mi-3abb8f-d7e6bc799724.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_failbot_failbot_ts-5ecd0f66e629.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/environment-31b06b039fca.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_primer_behaviors_dist_esm_index_mjs-0dbb79f97f8f.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_selector-observer_dist_index_esm_js-f690fd9ae3d5.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_relative-time-element_dist_index_js-f6da4b3fa34c.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_auto-complete-element_dist_index_js-node_modules_github_catalyst_-8e9f78-a74b4e0a8a6b.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_text-expander-element_dist_index_js-78748950cb0c.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-b5f1d7-a1760ffda83d.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_markdown-toolbar-element_dist_index_js-ceef33f593fa.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-c44a69-f0c8a795d1fd.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/github-elements-ed51bf4a426a.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/element-registry-a7f13d843149.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec-72267f4e3ff9.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_lit-html_lit-html_js-be8cb88f481b.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_morphdom_dist_morphdom-e-7c534c-a4a1922eb55f.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js-e3cbe28f1638.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-893f9f-6cf3320416b8.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_color-convert_index_js-e3180fe3bcb3.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_quote-selection_dist_index_js-node_modules_github_session-resume_-69cfcc-833249ee3034.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_updatable-content_updatable-content_ts-0d1db422e5cc.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/app_assets_modules_github_behaviors_task-list_ts-app_assets_modules_github_sso_ts-ui_packages-900dde-cab6164e492b.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/app_assets_modules_github_sticky-scroll-into-view_ts-83e480198629.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/app_assets_modules_github_behaviors_ajax-error_ts-app_assets_modules_github_behaviors_include-87a4ae-153d9024e8bd.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/app_assets_modules_github_behaviors_commenting_edit_ts-app_assets_modules_github_behaviors_ht-83c235-47714e1f448d.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/behaviors-27aee9d5f86c.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-f6223d90c7ba.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/notifications-global-7556bd523830.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_virtualized-list_es_index_js-node_modules_github_template-parts_lib_index_js-96453a51f920.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_remote-form_dist_index_js-node_modules_delegated-events_dist_inde-70450e-eecf0d50276f.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/app_assets_modules_github_ref-selector_ts-df71139e3900.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/codespaces-6b393e6a52d6.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-3eebbd-0763620ad7bf.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_delegated-events_di-e161aa-9d41fb1b6c9e.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_github_remote--3c9c82-7238cfcdaa51.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/repositories-8174cf9be44d.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_catalyst_lib_inde-dbbea9-26cce2010167.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/code-menu-534f8f82fbb7.js.descarga"></script>
  
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-react.1cf896b6a5598ae0f649.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/notifications-subscriptions-menu.1bcff9205c241e99cff2.module.css">


  



  
  
  

    
  


  


    


  
  

  
  

    



  

  




    

  

    

    

      

      

    
    
    

      
  
  


      
      


      


      
      
      

        


  <meta http-equiv="x-pjax-version" content="ae2883d63ad27240c87248958df6ff438c4a43cc4e25bbccf6a00f9408232b8c" data-turbo-track="reload">
  <meta http-equiv="x-pjax-csp-version" content="ace39c3b6632770952207593607e6e0be0db363435a8b877b1f96abe6430f345" data-turbo-track="reload">
  <meta http-equiv="x-pjax-css-version" content="1176077845c9479908e07e5cf5cf240c66928ac47340d56f202a3cfb9fc04dd3" data-turbo-track="reload">
  <meta http-equiv="x-pjax-js-version" content="c1bdccc66553a76493f38276d2f666f9718dbeb1daa87f7615c7cb5f98f93499" data-turbo-track="reload">

  

      
  

  



      


    


  

  

  
  
  




  
  

  

  <style data-styled="active" data-styled-version="5.3.11"></style><style id="ms-consent-banner-main-styles">.w8hcgFksdo30C8w-bygqu{color:#000}.ydkKdaztSS0AeHWIeIHsQ a{color:#0067B8}.erL690_8JwUW-R4bJRcfl{background-color:#EBEBEB;border:none;color:#000}.erL690_8JwUW-R4bJRcfl:enabled:hover{color:#000;background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}.erL690_8JwUW-R4bJRcfl:enabled:focus{background-color:#DBDBDB;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}.erL690_8JwUW-R4bJRcfl:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2);border:none}._1zNQOqxpBFSokeCLGi_hGr{border:none;background-color:#0067B8;color:#fff}._1zNQOqxpBFSokeCLGi_hGr:enabled:hover{color:#fff;background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:none}._1zNQOqxpBFSokeCLGi_hGr:enabled:focus{background-color:#0067B8;box-shadow:0px 4px 10px rgba(0,0,0,0.25);border:2px solid #000}._1zNQOqxpBFSokeCLGi_hGr:disabled{opacity:1;color:rgba(0,0,0,0.2);background-color:rgba(0,120,215,0.2);border:none}._23tra1HsiiP6cT-Cka-ycB{position:relative;display:flex;z-index:9999;width:100%;background-color:#F2F2F2;justify-content:space-between;text-align:left}div[dir="rtl"]._23tra1HsiiP6cT-Cka-ycB{text-align:right}._1Upc2NjY8AlDn177YoVj0y{margin:0;padding-left:5%;padding-top:8px;padding-bottom:8px}div[dir="rtl"] ._1Upc2NjY8AlDn177YoVj0y{margin:0;padding:8px 5% 8px 0;float:none}._23tra1HsiiP6cT-Cka-ycB svg{fill:none;max-width:none;max-height:none}._1V_hlU-7jdtPiooHMu89BB{display:table-cell;padding:12px;width:24px;height:24px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:24px;line-height:0}.f6QKJD7fhSbnJLarTL-W-{display:table-cell;vertical-align:middle;padding:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:16px}.f6QKJD7fhSbnJLarTL-W- a{text-decoration:underline}._2j0fmugLb1FgYz6KPuB91w{display:inline-block;margin-left:5%;margin-right:5%;min-width:40%;min-width:calc((150px + 3 * 4px) * 2 + 150px);min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;align-self:center;position:relative}._1XuCi2WhiqeWRUVp3pnFG3{margin:4px;padding:5px;min-width:150px;min-height:36px;vertical-align:top;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._1XuCi2WhiqeWRUVp3pnFG3:focus{box-sizing:border-box}._1XuCi2WhiqeWRUVp3pnFG3:disabled{cursor:not-allowed}._2bvsb3ubApyZ0UGoQA9O9T{display:block;position:fixed;z-index:10000;top:0;left:0;width:100%;height:100%;background-color:rgba(255,255,255,0.6);overflow:auto;text-align:left}div[dir="rtl"]._2bvsb3ubApyZ0UGoQA9O9T{text-align:right}div[dir="rtl"] ._2bvsb3ubApyZ0UGoQA9O9T{left:auto;right:0}.AFsJE948muYyzCMktdzuk{position:relative;top:8%;margin-bottom:40px;margin-left:auto;margin-right:auto;box-sizing:border-box;width:640px;background-color:#fff;border:1px solid #0067B8}._3kWyBRbW_dgnMiEyx06Fu4{float:right;z-index:1;margin:2px;padding:12px;border:none;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:13px;line-height:13px;display:flex;align-items:center;text-align:center;color:#666;background-color:#fff}div[dir="rtl"] ._3kWyBRbW_dgnMiEyx06Fu4{margin:2px;padding:12px;float:left}.uCYvKvHXrhjNgflv1VqdD{position:static;margin-top:36px;margin-left:36px;margin-right:36px}._17pX1m9O_W--iZbDt3Ta5r{margin-top:0;margin-bottom:12px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:24px;text-transform:none}._1kBkHQ1V1wu3kl-YcLgUr6{height:446px;overflow:auto}._20_nXDf6uFs9Q6wxRXG-I-{margin-top:0;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._20_nXDf6uFs9Q6wxRXG-I- a{text-decoration:underline}dl._2a0NH_GDQEQe5Ynfo7suVH{margin-top:36px;margin-bottom:0;padding:0;list-style:none;text-transform:none}dt._3j_LCPv7fyXv3A8FIXVwZ4{margin-top:20px;float:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;list-style:none}.k-vxTGFbdq1aOZB2HHpjh{margin:0;padding:0;border:none}._2Bucyy75c_ogoU1g-liB5R{margin:0;padding:0;border-bottom:none;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:600;font-size:18px;line-height:24px;text-transform:none}._63gwfzV8dclrsl2cfd90r{display:inline-block;margin-top:0;margin-bottom:13px;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px}._1l8wM_4mRYGz3Iu7l3BZR7{display:block}._2UE03QS02aZGkslegN_F-i{display:inline-block;position:relative;left:5px;margin-bottom:13px;margin-right:34px;padding:3px}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{margin:0 0 13px 34px;padding:3px;float:none}div[dir="rtl"] ._2UE03QS02aZGkslegN_F-i{left:auto;right:5px}._23tra1HsiiP6cT-Cka-ycB *::before,._2bvsb3ubApyZ0UGoQA9O9T *::before,._23tra1HsiiP6cT-Cka-ycB *::after,._2bvsb3ubApyZ0UGoQA9O9T *::after{box-sizing:inherit}._1HSFn0HzGo6w4ADApV8-c4{outline:2px solid rgba(0,0,0,0.8)}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2{display:inline-block;position:relative;margin-top:0;margin-left:0;margin-right:0;height:0;width:0;border-radius:0;cursor:pointer;outline:none;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{display:block;position:absolute;top:5px;left:3px;height:19px;width:19px;content:"";border-radius:50%;border:1px solid #000;background-color:#fff}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2+label::before{left:auto;right:3px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:rgba(0,0,0,0.8)}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:hover::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::before{border:1px solid #0067B8}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:not(:disabled)+label:focus::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{display:block;position:absolute;top:10px;left:8px;height:9px;width:9px;content:"";border-radius:50%;background-color:#000}div[dir="rtl"] input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked+label::after{left:auto;right:8px}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label{cursor:not-allowed}input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled+label::before{border:1px solid rgba(0,0,0,0.2);background-color:rgba(0,0,0,0.2)}._3RJzeL3l9Rl_lAQEm6VwdX{display:block;position:static;float:right;margin-top:0;margin-bottom:0;margin-left:19px;margin-right:0;padding-top:0;padding-bottom:0;padding-left:8px;padding-right:0;width:80%;width:calc(100% - 19px);font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-transform:none;cursor:pointer;box-sizing:border-box}div[dir="rtl"] ._3RJzeL3l9Rl_lAQEm6VwdX{margin:0 19px 0 0;padding:0 8px 0 0;float:left}.nohp3sIG12ZBhzcMnPala{margin-top:20px;margin-bottom:48px}._2uhaEsmeotZ3P-M0AXo2kF{padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._2uhaEsmeotZ3P-M0AXo2kF:focus{box-sizing:border-box}._2uhaEsmeotZ3P-M0AXo2kF:disabled{cursor:not-allowed}._3tOu1FJ59c_xz_PmI1lKV5{float:right;padding:0;width:278px;height:36px;cursor:pointer;font-family:Segoe UI, SegoeUI, Arial, sans-serif;font-style:normal;font-weight:normal;font-size:15px;line-height:20px;text-align:center}._3tOu1FJ59c_xz_PmI1lKV5:focus{box-sizing:border-box}._3tOu1FJ59c_xz_PmI1lKV5:disabled{cursor:not-allowed}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0;padding:0;float:left}@media only screen and (max-width: 768px){._2j0fmugLb1FgYz6KPuB91w,._1Upc2NjY8AlDn177YoVj0y{padding-top:8px;padding-bottom:12px;padding-left:3.75%;padding-right:3.75%;margin:0;width:92.5%}._23tra1HsiiP6cT-Cka-ycB{display:block}._1XuCi2WhiqeWRUVp3pnFG3{margin-bottom:8px;margin-left:0;margin-right:0;width:100%}._2bvsb3ubApyZ0UGoQA9O9T{overflow:hidden}.AFsJE948muYyzCMktdzuk{top:1.8%;width:93.33%;height:96.4%;overflow:hidden}.uCYvKvHXrhjNgflv1VqdD{margin-top:24px;margin-left:24px;margin-right:24px;height:100%}._1kBkHQ1V1wu3kl-YcLgUr6{height:62%;height:calc(100% - 188px);min-height:50%}._2uhaEsmeotZ3P-M0AXo2kF{width:100%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:12px;margin-left:0;width:100%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 12px 0;padding:0;float:none}}@media only screen and (max-width: 768px) and (orientation: landscape), only screen and (max-height: 260px), only screen and (max-width: 340px){.AFsJE948muYyzCMktdzuk{overflow:auto}}@media only screen and (max-height: 260px), only screen and (max-width: 340px){._1XuCi2WhiqeWRUVp3pnFG3{min-width:0}._3kWyBRbW_dgnMiEyx06Fu4{padding:3%}.uCYvKvHXrhjNgflv1VqdD{margin-top:3%;margin-left:3%;margin-right:3%}._17pX1m9O_W--iZbDt3Ta5r{margin-bottom:3%}._1kBkHQ1V1wu3kl-YcLgUr6{height:calc(79% - 64px)}.nohp3sIG12ZBhzcMnPala{margin-top:5%;margin-bottom:10%}._3tOu1FJ59c_xz_PmI1lKV5{margin-bottom:3%}div[dir="rtl"] ._3tOu1FJ59c_xz_PmI1lKV5{margin:0 0 3% 0;padding:0;float:none}}
</style><style type="text/css" id="ms-consent-banner-theme-styles">._23tra1HsiiP6cT-Cka-ycB {
            background-color: #24292f !important;
        }.w8hcgFksdo30C8w-bygqu {
            color: #ffffff !important;
        }.ydkKdaztSS0AeHWIeIHsQ a {
            color: #d8b9ff !important;
        }._2bvsb3ubApyZ0UGoQA9O9T {
            background-color: rgba(23, 23, 23, 0.8) !important;
        }.AFsJE948muYyzCMktdzuk {
            background-color: #24292f !important;
            border: 1px solid #d8b9ff !important;
        }._3kWyBRbW_dgnMiEyx06Fu4 {
            color: #d8b9ff !important;
            background-color: #24292f !important;
        }._1zNQOqxpBFSokeCLGi_hGr {
            border: 1px solid #ffffff !important;
            background-color: #ffffff !important;
            color: #1f2328 !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:hover {
            color: #1f2328 !important;
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 1px solid transparent !important;
        }._1zNQOqxpBFSokeCLGi_hGr:enabled:focus {
            background-color: #d8b9ff !important;
            box-shadow: none !important;
            border: 2px solid #ffffff !important;
        }._1zNQOqxpBFSokeCLGi_hGr:disabled {
            opacity: 0.5 !important;
            color: #1f2328 !important;
            background-color: #ffffff !important;
            border: 1px solid transparent !important;
        }.erL690_8JwUW-R4bJRcfl {
            border: 1px solid #eaeef2 !important;
            background-color: #32383f !important;
            color: #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:hover {
            color: #ffffff !important;
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 1px solid #ffffff !important;
        }.erL690_8JwUW-R4bJRcfl:enabled:focus {
            background-color: #24292f !important;
            box-shadow: none !important;
            border: 2px solid #6e7781 !important;
        }.erL690_8JwUW-R4bJRcfl:disabled {
            opacity: 0.5 !important;
            color: #ffffff !important;
            background-color: #424a53 !important;
            border: 1px solid #6e7781 !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label::before {
            border: 1px solid #d8b9ff !important;
            background-color: #24292f !important;
        }._1HSFn0HzGo6w4ADApV8-c4 {
            outline: 2px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:checked + label::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:hover::after {
            background-color: #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::before {
            border: 1px solid #ffffff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2 + label:focus::after {
            background-color: #d8b9ff !important;
        }input[type="radio"]._1dp8Vp5m3HwAqGx8qBmFV2:disabled + label::before {
            border: 1px solid rgba(227, 227, 227, 0.2) !important;
            background-color: rgba(227, 227, 227, 0.2) !important;
        }</style><link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/staff-de9b2259199c.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/devtools-ed3c56d5f6b2.css"><link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/react-code-view.ab7d8fac328c00e5e0cc.module.css"><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/primer-react-6bae0b4b7a9d.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/react-core-62fd74d678e1.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/react-lib-2131e17288a8.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/octicons-react-611691cca2f6.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-62da9f-2df2f32ec596.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd-f7cc96ebae76.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js-55fea94174bf.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_dompurify_dist_purify_js-b89b98661809.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_lodash-es__Stack_js-node_modules_lodash-es__Uint8Array_js-node_modules_l-4faaa6-4a736fde5c2f.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_lodash-es__baseIsEqual_js-8929eb9718d5.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_react-reverse-portal_dist_web_index_js-node_modules_primer_live-region-e-18c5ad-0b67a5a18b33.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_aria-live_aria-live_ts-ui_packages_promise-with-resolvers-polyfill_promise-with-r-014121-5fd3ba80197f.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_paths_index_ts-a665ced57b80.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_ref-selector_RefSelector_tsx-47d1fc4a26b2.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-530254-10744b983dd4.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_code-view-shared_hooks_use-canonical-object_ts-ui_packages_code-view-shared_hooks-495298-2e8f9997cff5.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_copilot-chat_utils_copilot-chat-types_ts-ui_packages_repos-file-tree-view_repos-f-894be6-9b1a09dc11f6.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/app_assets_modules_github_blob-anchor_ts-ui_packages_code-nav_code-nav_ts-ui_packages_filter--8253c1-bd96236c8a65.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_diffs_diff-parts_ts-aafebbecabf5.js.descarga"></script><script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/react-code-view-43a423a35a1c.js.descarga"></script><link rel="dns-prefetch" href="https://github.githubassets.com/"><link rel="dns-prefetch" href="https://avatars.githubusercontent.com/"><link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com/"><link rel="dns-prefetch" href="https://user-images.githubusercontent.com/"><link rel="preconnect" href="https://github.githubassets.com/" crossorigin=""><link rel="preconnect" href="https://avatars.githubusercontent.com/"><title>Countable/Countable.js at master · RadLikeWhoa/Countable</title><meta name="route-pattern" content="/:user_id/:repository/blob/*name(/*path)" data-turbo-transient=""><meta name="route-controller" content="blob" data-turbo-transient=""><meta name="route-action" content="show" data-turbo-transient=""><meta name="current-catalog-service-hash" content="f3abb0cc802f3d7b95fc8762b94bdcb13bf39634c40c357301c4aa1d67a256fb"><meta name="request-id" content="EB33:22E096:1157C9A:17125BC:679AFD2A" data-turbo-transient="true"><meta name="html-safe-nonce" content="d956e9a9f20588d265d39b92a772a00ee303c4a800bb988cacaf294ed2f3ba01" data-turbo-transient="true"><meta name="visitor-payload" content="eyJyZWZlcnJlciI6Imh0dHBzOi8vZ2l0aHViLmNvbS9SYWRMaWtlV2hvYS9Db3VudGFibGUvYmxvYi9tYXN0ZXIvQ291bnRhYmxlLmpzIiwicmVxdWVzdF9pZCI6IkVCMzM6MjJFMDk2OjExNTdDOUE6MTcxMjVCQzo2NzlBRkQyQSIsInZpc2l0b3JfaWQiOiI1MzY1OTc5Mzk5NDI4NTM5NjMwIiwicmVnaW9uX2VkZ2UiOiJpYWQiLCJyZWdpb25fcmVuZGVyIjoiaWFkIn0=" data-turbo-transient="true"><meta name="visitor-hmac" content="12cc6e4f3aa8758b1010391216e415c14321c34327124a3de1b6c11d5773647d" data-turbo-transient="true"><meta name="hovercard-subject-tag" content="repository:8664451" data-turbo-transient=""><meta name="github-keyboard-shortcuts" content="repository,source-code,file-tree,copilot" data-turbo-transient="true"><meta name="selected-link" value="repo_source" data-turbo-transient=""><link rel="assets" href="https://github.githubassets.com/"><meta name="google-site-verification" content="Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I"><meta name="octolytics-url" content="https://collector.github.com/github/collect"><meta name="octolytics-actor-id" content="190155707"><meta name="octolytics-actor-login" content="beto77-74"><meta name="octolytics-actor-hash" content="ec3c271be8efedcae62fa97813a4a4395b3cb5972425b14cf0db3f61b9ef5a87"><meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-turbo-transient="true"><meta name="user-login" content="beto77-74"><link rel="sudo-modal" href="https://github.com/sessions/sudo_modal"><meta name="turbo-cache-control" content="no-preview" data-turbo-transient=""><meta name="turbo-cache-control" content="no-cache" data-turbo-transient=""><meta data-hydrostats="publish"><meta name="go-import" content="github.com/RadLikeWhoa/Countable git https://github.com/RadLikeWhoa/Countable.git"><meta name="octolytics-dimension-user_id" content="1138459"><meta name="octolytics-dimension-user_login" content="RadLikeWhoa"><meta name="octolytics-dimension-repository_id" content="8664451"><meta name="octolytics-dimension-repository_nwo" content="RadLikeWhoa/Countable"><meta name="octolytics-dimension-repository_public" content="true"><meta name="octolytics-dimension-repository_is_fork" content="false"><meta name="octolytics-dimension-repository_network_root_id" content="8664451"><meta name="octolytics-dimension-repository_network_root_nwo" content="RadLikeWhoa/Countable"><meta name="turbo-body-classes" content="logged-in env-production page-responsive"><meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats"><meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors"><link rel="mask-icon" href="https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg" color="#000000"><link rel="alternate icon" class="js-site-favicon" type="image/png" href="https://github.githubassets.com/favicons/favicon.png"><link rel="icon" class="js-site-favicon" type="image/svg+xml" href="https://github.githubassets.com/favicons/favicon.svg" data-base-href="https://github.githubassets.com/favicons/favicon"><meta name="theme-color" content="#1e2327"><meta name="color-scheme" content="light dark"><meta name="msapplication-TileImage" content="/windows-tile.png"><meta name="msapplication-TileColor" content="#ffffff"><link rel="manifest" href="https://github.com/manifest.json" crossorigin="use-credentials"><style type="text/css" id="ms-consent-banner-theme-styles"></style></head>

  <body class="logged-in env-production page-responsive" style="overflow-wrap: break-word; --dialog-scrollgutter: 15px;">
    <div data-turbo-body="" class="logged-in env-production page-responsive" style="word-wrap: break-word;">
      


    <div class="position-relative header-wrapper js-header-wrapper ">
      <a href="https://github.com/RadLikeWhoa/Countable/blob/master/Countable.js#start-of-content" data-skip-target-assigned="false" class="p-3 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content" _msttexthash="350909" _msthash="368">Saltar al contenido</a>

      <span data-view-component="true" class="progress-pjax-loader Progress position-fixed width-full">
    <span style="width: 0%;" data-view-component="true" class="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"></span>
</span>      
      
      <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_ui-commands_ui-commands_ts-006e4d0cf710.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/keyboard-shortcuts-dialog-3d37f1665ad7.js.descarga"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-react.1cf896b6a5598ae0f649.module.css">

<react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}</script>
  <div data-target="react-partial.reactRoot"><div class="d-none"></div><script type="application/json" id="__PRIMER_DATA_:ru:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>




      

          

              <header class="AppHeader" role="banner">
  <h2 class="sr-only" _msttexthash="368212" _msthash="369">Menú de navegación</h2>

    

    <div class="AppHeader-globalBar pb-2 js-global-bar">
      <div class="AppHeader-globalBar-start">
          <deferred-side-panel data-url="/_side-panels/global" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
      <button aria-label="Abrir menú de navegación global" data-action="click:deferred-side-panel#loadPanel click:deferred-side-panel#panelOpened" data-show-dialog-id="dialog-6cac18d8-f869-4ab9-807d-4ba88f202aea" id="dialog-show-dialog-6cac18d8-f869-4ab9-807d-4ba88f202aea" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button p-0 color-fg-muted" _mstaria-label="616642" _msthash="370">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-three-bars Button-visual">
    <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
</svg>
</button>

<dialog-helper _msthidden="20">
  <dialog data-target="deferred-side-panel.panel" id="dialog-6cac18d8-f869-4ab9-807d-4ba88f202aea" aria-modal="true" aria-labelledby="dialog-6cac18d8-f869-4ab9-807d-4ba88f202aea-title" aria-describedby="dialog-6cac18d8-f869-4ab9-807d-4ba88f202aea-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade Overlay--placement-left SidePanel Overlay--disableScroll" _msthidden="20">
    <div styles="flex-direction: row;" data-view-component="true" class="Overlay-header" _msthidden="2">
  <div class="Overlay-headerContentWrap" _msthidden="2">
    <div class="Overlay-titleWrap" _msthidden="1">
      <h1 class="Overlay-title sr-only" id="dialog-6cac18d8-f869-4ab9-807d-4ba88f202aea-title" _msttexthash="318409" _msthidden="1" _msthash="371">
        Global navigation
      </h1>
            <div data-view-component="true" class="d-flex">
      <div data-view-component="true" class="AppHeader-logo position-relative">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
</div></div>
    </div>
    <div class="Overlay-actionWrap" _msthidden="1">
      <button data-close-dialog-id="dialog-6cac18d8-f869-4ab9-807d-4ba88f202aea" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton" _msthidden="A" _mstaria-label="59709" _msthash="372"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="dialog-6cac18d8-f869-4ab9-807d-4ba88f202aea-title" data-catalyst="" _msthidden="18" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body d-flex flex-column px-2" _msthidden="18">    <div data-view-component="true" class="d-flex flex-column mb-3" _msthidden="11">
        <nav aria-label="Site navigation" data-view-component="true" class="ActionList" _msthidden="9" _mstaria-label="261573" _msthash="373">
  
  <nav-list data-catalyst="" _msthidden="9">
    <ul data-target="nav-list.topLevelList" data-view-component="true" class="ActionListWrap" _msthidden="9">
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-hotkey="g d" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;HOME&quot;,&quot;label&quot;:null}" id="item-54742ca0-9f1c-4748-b1e5-f2b70afdf255" href="https://github.com/dashboard" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-home">
    <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="43979" _msthidden="1" _msthash="374">
          Home
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES&quot;,&quot;label&quot;:null}" id="item-c7400f69-ce2a-4190-9558-86aa1d0b29c4" href="https://github.com/issues" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="79651" _msthidden="1" _msthash="375">
          Issues
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS&quot;,&quot;label&quot;:null}" id="item-4031e659-9aba-449e-aa52-6184f7ee6d5b" href="https://github.com/pulls" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="214734" _msthidden="1" _msthash="376">
          Pull requests
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PROJECTS&quot;,&quot;label&quot;:null}" id="item-25ec462b-d508-4c89-8c86-89d208bdaab1" href="https://github.com/projects" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="116324" _msthidden="1" _msthash="377">
          Projects
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;DISCUSSIONS&quot;,&quot;label&quot;:null}" id="item-816bbb33-eb5a-4b5a-8d06-e4ac72387423" href="https://github.com/discussions" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-comment-discussion">
    <path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="186589" _msthidden="1" _msthash="378">
          Discussions
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;CODESPACES&quot;,&quot;label&quot;:null}" id="item-888e52c9-f866-41a3-b6b4-7c715631ec67" href="https://github.com/codespaces" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-codespaces">
    <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path><path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="154414" _msthidden="1" _msthash="379">
          Codespaces
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;COPILOT&quot;,&quot;label&quot;:null}" id="item-0f58d260-b52a-4f14-a851-4da455980db4" href="https://github.com/copilot" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="96759" _msthidden="1" _msthash="380">
          Copilot
</span>      
</a>
  
</li>

        
          <li role="presentation" aria-hidden="true" data-view-component="true" class="ActionList-sectionDivider"></li>
        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;EXPLORE&quot;,&quot;label&quot;:null}" id="item-5880bf43-528e-44a3-86e8-398438c278c6" href="https://github.com/explore" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-telescope">
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="96629" _msthidden="1" _msthash="381">
          Explore
</span>      
</a>
  
</li>

        
          
<li data-item-id="" data-targets="nav-list.items" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;MARKETPLACE&quot;,&quot;label&quot;:null}" id="item-7b6981f7-8e60-4073-8aaf-057334968376" href="https://github.com/marketplace" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-gift">
    <path d="M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="177294" _msthidden="1" _msthash="382">
          Marketplace
</span>      
</a>
  
</li>

</ul>  </nav-list>
</nav>

        <div data-view-component="true" class="my-3 d-flex flex-justify-center height-full" _msthidden="1">
          <span data-view-component="true" _msthidden="1">
  <svg style="box-sizing: content-box; color: var(--color-icon-primary);" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" data-view-component="true" class="anim-rotate">
    <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
    <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>    <span class="sr-only" _msttexthash="92391" _msthidden="1" _msthash="383">Loading</span>
</span>
</div>
</div>
      <div data-view-component="true" class="flex-1"></div>


      <div data-view-component="true" class="px-2" _msthidden="7">      <p class="color-fg-subtle text-small text-light" _msttexthash="247351" _msthidden="1" _msthash="384">© 2025 GitHub, Inc.</p>

      <div data-view-component="true" class="d-flex flex-wrap text-small text-light" _msthidden="6">
          <a target="_blank" href="https://github.com/about" data-view-component="true" class="Link mr-2" _msttexthash="60892" _msthidden="1" _msthash="385">About</a>
          <a target="_blank" href="https://github.blog/" data-view-component="true" class="Link mr-2" _msttexthash="43615" _msthidden="1" _msthash="386">Blog</a>
          <a target="_blank" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link mr-2" _msttexthash="62101" _msthidden="1" _msthash="387">Terms</a>
          <a target="_blank" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link mr-2" _msttexthash="96525" _msthidden="1" _msthash="388">Privacy</a>
          <a target="_blank" href="https://github.com/security" data-view-component="true" class="Link mr-2" _msttexthash="119158" _msthidden="1" _msthash="389">Security</a>
          <a target="_blank" href="https://www.githubstatus.com/" data-view-component="true" class="Link mr-3" _msttexthash="80717" _msthidden="1" _msthash="390">Status</a>

</div></div>
</div>
      </scrollable-region>
      
</dialog></dialog-helper>

  </include-fragment>
</deferred-side-panel>

        <a class="AppHeader-logo ml-1" href="https://github.com/" data-hotkey="g d" aria-label="Página principal " data-turbo="false" data-analytics-event="{&quot;category&quot;:&quot;Header&quot;,&quot;action&quot;:&quot;go to dashboard&quot;,&quot;label&quot;:&quot;icon:logo&quot;}" _mstaria-label="110916" _msthash="391">
          <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
        </a>

          <div class="AppHeader-context">
  <div class="AppHeader-context-compact" _msthidden="7">
      <button aria-expanded="false" aria-haspopup="dialog" aria-label="Page context: RadLikeWhoa / Countable" id="dialog-show-context-region-dialog" data-show-dialog-id="context-region-dialog" type="button" data-view-component="true" class="AppHeader-context-compact-trigger Truncate Button--secondary Button--medium Button box-shadow-none" _msthidden="2" _mstaria-label="972777" _msthash="392">  <span class="Button-content" _msthidden="2">
    <span class="Button-label" _msthidden="2"><span class="AppHeader-context-compact-lead" _msthidden="1">
                <span class="AppHeader-context-compact-parentItem" _msttexthash="168545" _msthidden="1" _msthash="393">RadLikeWhoa</span>
                <span class="no-wrap">&nbsp;/</span>

            </span>

            <strong class="AppHeader-context-compact-mainItem d-flex flex-items-center Truncate" _msthidden="1">
  <span class="Truncate-text " _msttexthash="133263" _msthidden="1" _msthash="394">Countable</span>

</strong></span>
  </span>
</button>

<dialog-helper _msthidden="4">
  <dialog id="context-region-dialog" aria-modal="true" aria-labelledby="context-region-dialog-title" aria-describedby="context-region-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll" _msthidden="4">
    <div data-view-component="true" class="Overlay-header" _msthidden="2">
  <div class="Overlay-headerContentWrap" _msthidden="2">
    <div class="Overlay-titleWrap" _msthidden="1">
      <h1 class="Overlay-title " id="context-region-dialog-title" _msttexthash="256204" _msthidden="1" _msthash="395">
        Navigate back to
      </h1>
        
    </div>
    <div class="Overlay-actionWrap" _msthidden="1">
      <button data-close-dialog-id="context-region-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton" _msthidden="A" _mstaria-label="59709" _msthash="396"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="context-region-dialog-title" data-catalyst="" _msthidden="2" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body" _msthidden="2">          <ul role="list" class="list-style-none" _msthidden="2">
    <li _msthidden="1">
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;RadLikeWhoa&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="https://github.com/RadLikeWhoa" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1" _msthidden="1">
        <span class="AppHeader-context-item-label Truncate-text " _msthidden="1">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-person mr-1">
    <path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path>
</svg><font _mstmutation="1" _msttexthash="168545" _msthidden="1" _msthash="397">

          RadLikeWhoa
        </font></span>

</a>
    </li>
    <li _msthidden="1">
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;Countable&quot;,&quot;screen_size&quot;:&quot;compact&quot;}" href="https://github.com/RadLikeWhoa/Countable" data-view-component="true" class="Link--primary Truncate d-flex flex-items-center py-1" _msthidden="1">
        <span class="AppHeader-context-item-label Truncate-text " _msthidden="1">
            <svg aria-hidden="true" height="12" viewBox="0 0 16 16" version="1.1" width="12" data-view-component="true" class="octicon octicon-repo mr-1">
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
</svg><font _mstmutation="1" _msttexthash="133263" _msthidden="1" _msthash="398">

          Countable
        </font></span>

</a>
    </li>
</ul>

</div>
      </scrollable-region>
      
</dialog></dialog-helper>
  </div>

  <div class="AppHeader-context-full">
    <nav role="navigation" aria-label="Contexto de la página" _mstaria-label="184015" _msthash="399">
      <ul role="list" class="list-style-none">
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;RadLikeWhoa&quot;,&quot;screen_size&quot;:&quot;full&quot;}" data-hovercard-type="user" data-hovercard-url="/users/RadLikeWhoa/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/RadLikeWhoa" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  " _msttexthash="168545" _msthash="400">

          RadLikeWhoa
        </span>

</a>
        <span class="AppHeader-context-item-separator">
          <span class="sr-only">/</span>
          <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M10.956 1.27994L6.06418 14.7201L5 14.7201L9.89181 1.27994L10.956 1.27994Z" fill="currentcolor"></path>
          </svg>
        </span>
    </li>
    <li>
      <a data-analytics-event="{&quot;category&quot;:&quot;SiteHeaderComponent&quot;,&quot;action&quot;:&quot;context_region_crumb&quot;,&quot;label&quot;:&quot;Countable&quot;,&quot;screen_size&quot;:&quot;full&quot;}" href="https://github.com/RadLikeWhoa/Countable" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label  " _msttexthash="111384" _msthash="401"> Contable </span>

</a>
    </li>
</ul>

    </nav>
  </div>
</div>

      </div>
      <div class="AppHeader-globalBar-end">
          <div class="AppHeader-search">
              


<qbsearch-input class="search-input" data-scope="repo:RadLikeWhoa/Countable" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="jJ44o1ETlFoswwyTUTpZg4ZQrLQb_VSWAVXGdvl_OSB5nhg_eMPk5qnQbV7bvq5HqSBGMFMSOKQB5wlGSLrLyg" data-max-custom-scopes="10" data-header-redesign-enabled="true" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="RadLikeWhoa/Countable" data-current-org="" data-current-owner="RadLikeWhoa" data-logged-in="true" data-copilot-chat-enabled="false" data-nl-search-enabled="false" data-catalyst="">
  <div class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center height-auto color-bg-transparent border-0 color-fg-subtle mx-0" data-action="click:qbsearch-input#searchInputContainerClicked">
      
            <button type="button" data-action="click:qbsearch-input#handleExpand" class="AppHeader-button AppHeader-search-whenNarrow" aria-label="Search or jump to…" aria-expanded="false" aria-haspopup="dialog" _msthidden="A" _mstaria-label="2513719" _msthash="402">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </button>


<div class="AppHeader-search-whenRegular">
  <div class="AppHeader-search-wrap AppHeader-search-wrap--hasTrailing">
    <div class="AppHeader-search-control AppHeader-search-control-overflow">
      <label for="AppHeader-searchInput" aria-label="Buscar o saltar a..." class="AppHeader-search-visual--leading" _mstaria-label="2513719" _msthash="403">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
      </label>

                <button type="button" data-target="qbsearch-input.inputButton" data-action="click:qbsearch-input#handleExpand" class="AppHeader-searchButton form-control input-contrast text-left color-fg-subtle no-wrap placeholder" data-hotkey="s,/" data-analytics-event="{&quot;location&quot;:&quot;navbar&quot;,&quot;action&quot;:&quot;searchbar&quot;,&quot;context&quot;:&quot;global&quot;,&quot;tag&quot;:&quot;input&quot;,&quot;label&quot;:&quot;searchbar_input_global_navbar&quot;}" aria-describedby="search-error-message-flash">
            <div class="overflow-hidden">
              <span id="qb-input-query" data-target="qbsearch-input.inputButtonText"><font _mstmutation="1" _msttexthash="283556" _msthash="404"> Tipo de búsqueda </font><kbd class="AppHeader-search-kbd">/</kbd></span>
            </div>
          </button>

    </div>


  </div>
</div>

    <input type="hidden" name="type" class="js-site-search-type-field">

    
<div class="Overlay--hidden " data-modal-dialog-overlay="" _msthidden="6">
  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-medium Overlay--height-auto" _msthidden="6">
      <h1 id="search-suggestions-dialog-header" class="sr-only" _msttexthash="2174341" _msthidden="1" _msthash="405">Search code, repositories, users, issues, pull requests...</h1>
    <div class="Overlay-body Overlay-body--paddingNone" _msthidden="5">
      
          <div data-view-component="true" _msthidden="5">        <div class="search-suggestions position-absolute width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container" style="border-radius: 12px;" data-target="qbsearch-input.queryBuilderContainer" hidden="" _msthidden="5">
          <!-- '"` --><!-- </textarea></xmp> --><form id="query-builder-test-form" action="https://github.com/RadLikeWhoa/Countable/blob/master/Countable.js" accept-charset="UTF-8" method="get" _msthidden="3">
  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder" data-min-width="300" data-catalyst="" _msthidden="3">
    <div class="FormControl FormControl--fullWidth" _msthidden="3">
      <label id="query-builder-test-label" for="query-builder-test" class="FormControl-label sr-only" _msttexthash="74607" _msthidden="1" _msthash="406">
        Search
      </label>
      <div class="QueryBuilder-StyledInput width-fit " data-target="query-builder.styledInput" _msthidden="1">
          <span id="query-builder-test-leadingvisual-wrap" class="FormControl-input-leadingVisualWrap QueryBuilder-leadingVisualWrap">
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-search FormControl-input-leadingVisual">
    <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
</svg>
          </span>
        <div data-target="query-builder.styledInputContainer" class="QueryBuilder-StyledInputContainer">
          <div aria-hidden="true" class="QueryBuilder-StyledInputContent" data-target="query-builder.styledInputContent"></div>
          <div class="QueryBuilder-InputWrapper">
            <div aria-hidden="true" class="QueryBuilder-Sizer" data-target="query-builder.sizer"><span></span></div>
            <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-2244410f-e2c1-4ff7-a3b0-06291d0e02e8" data-target="query-builder.input" data-action="
          input:query-builder#inputChange
          blur:query-builder#inputBlur
          keydown:query-builder#inputKeydown
          focus:query-builder#inputFocus
        " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" aria-controls="query-builder-test-results" aria-autocomplete="list" aria-haspopup="listbox" style="width: 300px;">
          </div>
        </div>
          <span class="sr-only" id="query-builder-test-clear" _msttexthash="58058" _msthidden="1" _msthash="407">Clear</span>
          <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-target="query-builder.clearButton" data-action="
                click:query-builder#clear
                focus:query-builder#clearButtonFocus
                blur:query-builder#clearButtonBlur
              " variant="small" hidden="" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x-circle-fill Button-visual">
    <path d="M2.343 13.657A8 8 0 1 1 13.658 2.343 8 8 0 0 1 2.343 13.657ZM6.03 4.97a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L6.94 8 4.97 9.97a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L8 9.06l1.97 1.97a.749.749 0 0 0 1.275-.326.749.749 0 0 0-.215-.734L9.06 8l1.97-1.97a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L8 6.94Z"></path>
</svg>
</button>

      </div>
      <template id="search-icon"></template>

<template id="code-icon"></template>

<template id="file-code-icon"></template>

<template id="history-icon"></template>

<template id="repo-icon"></template>

<template id="bookmark-icon"></template>

<template id="plus-circle-icon"></template>

<template id="circle-icon"></template>

<template id="trash-icon"></template>

<template id="team-icon"></template>

<template id="project-icon"></template>

<template id="pencil-icon"></template>

<template id="copilot-icon"></template>

<template id="copilot-error-icon"></template>

<template id="workflow-icon"></template>

<template id="book-icon"></template>

<template id="code-review-icon"></template>

<template id="codespaces-icon"></template>

<template id="comment-icon"></template>

<template id="comment-discussion-icon"></template>

<template id="organization-icon"></template>

<template id="rocket-icon"></template>

<template id="shield-check-icon"></template>

<template id="heart-icon"></template>

<template id="server-icon"></template>

<template id="globe-icon"></template>

<template id="issue-opened-icon"></template>

<template id="device-mobile-icon"></template>

<template id="package-icon"></template>

<template id="credit-card-icon"></template>

<template id="play-icon"></template>

<template id="gift-icon"></template>

<template id="code-square-icon"></template>

<template id="device-desktop-icon"></template>

        <div class="position-relative" _msthidden="1">
                <ul role="listbox" class="ActionListWrap QueryBuilder-ListWrap" aria-label="Suggestions" data-action="
                    combobox-commit:query-builder#comboboxCommit
                    mousedown:query-builder#resultsMousedown
                  " data-target="query-builder.resultsList" data-persist-list="false" id="query-builder-test-results" _msthidden="A" _mstaria-label="186199" _msthash="408"></ul>
        </div>
      <div class="FormControl-inlineValidation" id="validation-2244410f-e2c1-4ff7-a3b0-06291d0e02e8" hidden="hidden">
        <span class="FormControl-inlineValidation--visual">
          <svg aria-hidden="true" height="12" viewBox="0 0 12 12" version="1.1" width="12" data-view-component="true" class="octicon octicon-alert-fill">
    <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
</svg>
        </span>
        <span></span>
</div>    </div>
    <div data-target="query-builder.screenReaderFeedback" aria-live="polite" aria-atomic="true" class="sr-only" _msttexthash="220584" _msthidden="1" _msthash="2177">0 suggestions.</div>
</query-builder></form>
          <div class="d-flex flex-row color-fg-muted px-3 text-small color-bg-default search-feedback-prompt" _msthidden="2">
            <a target="_blank" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax" data-view-component="true" class="Link color-fg-accent text-normal ml-2" _msttexthash="330577" _msthidden="1" _msthash="409">Search syntax tips</a>            <div class="d-flex flex-1"></div>
              <button data-action="click:qbsearch-input#showFeedbackDialog" type="button" data-view-component="true" class="Button--link Button--medium Button color-fg-accent text-normal ml-2" _msthidden="1">  <span class="Button-content" _msthidden="1">
    <span class="Button-label" _msttexthash="196131" _msthidden="1" _msthash="410">Give feedback</span>
  </span>
</button>
          </div>
        </div>
</div>

    </div>
</modal-dialog></div>
  </div>
  <div data-action="click:qbsearch-input#retract" class="dark-backdrop position-fixed" hidden="" data-target="qbsearch-input.darkBackdrop"></div>
  <div class="color-fg-default" _msthidden="15">
    
<dialog-helper _msthidden="6">
  <dialog data-target="qbsearch-input.feedbackDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="feedback-dialog" aria-modal="true" aria-labelledby="feedback-dialog-title" aria-describedby="feedback-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll" _msthidden="6">
    <div data-view-component="true" class="Overlay-header" _msthidden="2">
  <div class="Overlay-headerContentWrap" _msthidden="2">
    <div class="Overlay-titleWrap" _msthidden="1">
      <h1 class="Overlay-title " id="feedback-dialog-title" _msttexthash="278356" _msthidden="1" _msthash="411">
        Provide feedback
      </h1>
        
    </div>
    <div class="Overlay-actionWrap" _msthidden="1">
      <button data-close-dialog-id="feedback-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton" _msthidden="A" _mstaria-label="59709" _msthash="412"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="feedback-dialog-title" data-catalyst="" _msthidden="2" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body" _msthidden="2">        <!-- '"` --><!-- </textarea></xmp> --><form id="code-search-feedback-form" data-turbo="false" action="https://github.com/search/feedback" accept-charset="UTF-8" method="post" _msthidden="2"><input type="hidden" name="authenticity_token" value="tnLTDHq2KAmIWYh0FzUXJ-ddzt_XU5sqatcWEVJg5esvMVxgX5I8d7NU-ziUJScileji__l-v7CEPyb-Zj7R2Q">
          <p _msttexthash="2749851" _msthidden="1" _msthash="413">We read every piece of feedback, and take your input very seriously.</p>
          <textarea name="feedback" class="form-control width-full mb-2" style="height: 120px" id="feedback"></textarea>
          <input name="include_email" id="include_email" aria-label="Include my email address so I can be contacted" class="form-control mr-2" type="checkbox" _msthidden="A" _mstaria-label="1312922" _msthash="414">
          <label for="include_email" style="font-weight: normal" _msttexthash="1312922" _msthidden="1" _msthash="415">Include my email address so I can be contacted</label>
</form></div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd" _msthidden="2">          <button data-close-dialog-id="feedback-dialog" type="button" data-view-component="true" class="btn" _msttexthash="73216" _msthidden="1" _msthash="416">    Cancel
</button>
          <button form="code-search-feedback-form" data-action="click:qbsearch-input#submitFeedback" type="submit" data-view-component="true" class="btn-primary btn" _msttexthash="251212" _msthidden="1" _msthash="417">    Submit feedback
</button>
</div>
</dialog></dialog-helper>

    <custom-scopes data-target="qbsearch-input.customScopesManager" data-catalyst="" _msthidden="9">
    
<dialog-helper _msthidden="9">
  <dialog data-target="custom-scopes.customScopesModalDialog" data-action="close:qbsearch-input#handleDialogClose cancel:qbsearch-input#handleDialogClose" id="custom-scopes-dialog" aria-modal="true" aria-labelledby="custom-scopes-dialog-title" aria-describedby="custom-scopes-dialog-description" data-view-component="true" class="Overlay Overlay-whenNarrow Overlay--size-medium Overlay--motion-scaleFade Overlay--disableScroll" _msthidden="9">
    <div data-view-component="true" class="Overlay-header Overlay-header--divided" _msthidden="3">
  <div class="Overlay-headerContentWrap" _msthidden="3">
    <div class="Overlay-titleWrap" _msthidden="2">
      <h1 class="Overlay-title " id="custom-scopes-dialog-title" _msttexthash="229385" _msthidden="1" _msthash="418">
        Saved searches
      </h1>
        <h2 id="custom-scopes-dialog-description" class="Overlay-description" _msttexthash="1938729" _msthidden="1" _msthash="419">Use saved searches to filter your results more quickly</h2>
    </div>
    <div class="Overlay-actionWrap" _msthidden="1">
      <button data-close-dialog-id="custom-scopes-dialog" aria-label="Close" type="button" data-view-component="true" class="close-button Overlay-closeButton" _msthidden="A" _mstaria-label="59709" _msthash="420"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg></button>
    </div>
  </div>
  
</div>
      <scrollable-region data-labelled-by="custom-scopes-dialog-title" data-catalyst="" _msthidden="4" style="overflow: auto;">
        <div data-view-component="true" class="Overlay-body" _msthidden="4">        <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

        <div hidden="" class="create-custom-scope-form" data-target="custom-scopes.createCustomScopeForm" _msthidden="4">
        <!-- '"` --><!-- </textarea></xmp> --><form id="custom-scopes-dialog-form" data-turbo="false" action="https://github.com/search/custom_scopes" accept-charset="UTF-8" method="post" _msthidden="4"><input type="hidden" name="authenticity_token" value="olOpPMW8Yas0WIy9ZDVERxXmdE52d65UviGa4pwU0DJ8N-g3dqk0CMKO0dtQDIfLcixeEkYIOrgcGBT6IsLDVw">
          <div data-target="custom-scopes.customScopesModalDialogFlash"></div>

          <input type="hidden" id="custom_scope_id" name="custom_scope_id" data-target="custom-scopes.customScopesIdField">

          <div class="form-group" _msthidden="2">
            <label for="custom_scope_name" _msttexthash="43069" _msthidden="1" _msthash="422">Name</label>
            <auto-check src="/search/custom_scopes/check_name" required="" only-validate-on-blur="false">
              <input type="text" name="custom_scope_name" id="custom_scope_name" data-target="custom-scopes.customScopesNameField" class="form-control" autocomplete="off" placeholder="github-ruby" required="" maxlength="50" spellcheck="false" _msthidden="A" _mstplaceholder="177697" _msthash="421">
              <input type="hidden" value="QuaOL28oDvsuoD1PyxZ4YfR1qrqf2A8mO4hIBZAqm3lSa0x5wAgmRAASChKOoO2EQGDkhwjIzEVCvNQr0Vl5Rw" data-csrf="true">
            </auto-check>
          </div>

          <div class="form-group" _msthidden="1">
            <label for="custom_scope_query" _msttexthash="63479" _msthidden="1" _msthash="424">Query</label>
            <input type="text" name="custom_scope_query" id="custom_scope_query" data-target="custom-scopes.customScopesQueryField" class="form-control" autocomplete="off" placeholder="(repo:mona/a OR repo:mona/b) AND lang:python" required="" maxlength="500" _msthidden="A" _mstplaceholder="1303263" _msthash="423">
          </div>

          <p class="text-small color-fg-muted" _msttexthash="1972425" _msthidden="1" _msthash="425">
            To see all available qualifiers, see our <a class="Link--inTextBlock" href="https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax">documentation</a>.
          </p>
</form>        </div>

        <div data-target="custom-scopes.manageCustomScopesForm">
          <div data-target="custom-scopes.list"></div>
        </div>

</div>
      </scrollable-region>
      <div data-view-component="true" class="Overlay-footer Overlay-footer--alignEnd Overlay-footer--divided" _msthidden="2">          <button data-action="click:custom-scopes#customScopesCancel" type="button" data-view-component="true" class="btn" _msttexthash="73216" _msthidden="1" _msthash="426">    Cancel
</button>
          <button form="custom-scopes-dialog-form" data-action="click:custom-scopes#customScopesSubmit" data-target="custom-scopes.customScopesSubmitButton" type="submit" data-view-component="true" class="btn-primary btn" _msttexthash="345540" _msthidden="1" _msthash="427">    Create saved search
</button>
</div>
</dialog></dialog-helper>
    </custom-scopes>
  </div>
</qbsearch-input>  <input type="hidden" value="wT20KLw7K6_rkEFbvREzWmJlv7_2xZB8WlvIMgdXfJFAjWJVT9C0S9cAC-00_n2zBzTUDpE0g23MSwoZHX1neg" data-csrf="true" class="js-data-jump-to-suggestions-path-csrf">


          </div>

        
          <div class="AppHeader-CopilotChat" _msthidden="2">
    <react-partial-anchor data-catalyst="" _msthidden="1">
      <button id="copilot-chat-header-button" data-target="react-partial-anchor.anchor" data-hotkey="Shift+C" aria-expanded="false" aria-controls="copilot-chat-panel" aria-labelledby="tooltip-d5366cf1-9a30-464d-bbeb-818c11b1f6e9" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonLeft">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copilot Button-visual">
    <path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path>
</svg>
</button><tool-tip id="tooltip-d5366cf1-9a30-464d-bbeb-818c11b1f6e9" for="copilot-chat-header-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip" _msttexthash="287950" _msthidden="1" _msthash="428"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Chat with Copilot</tool-tip>

      
    
        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_react-relay_index_js-c5b7ce0827d5.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-843b41414e0e.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-44d0fc-fe91074a0219.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_highlight_js_lib_index_js-node_modules_tanstack_react-query_build_modern-d366b9-e5ba7e8a050b.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_accname_dist_access-b37425-35bd8d94d981.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_hotkey_dist_index_-2c4211-d4ef351bc77f.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_item-picker_constants_labels_ts-ui_packages_item-picker_constants_values_ts-ui_pa-163a9a-1dfc031de5fd.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_item-picker_components_RepositoryPicker_tsx-87e4a7f5e8d3.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_copy-to-clipboard_CopyToClipboardButton_tsx-ui_packages_inline-autocomplete_Inlin-d7b165-a7c91db9dcfa.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_copilot-chat_utils_copilot-chat-helpers_ts-4c041da72097.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_copilot-chat_utils_copilot-chat-hooks_ts-ui_packages_issue-viewer_utils_queries_ts-f12e6efbfdde.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_test-id-props_test-id-props_ts-ui_packages_copilot-markdown_MarkdownRenderer_tsx--f736ee-7bc7c477e03d.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/copilot-chat-f290f4a67c47.js.descarga"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-react.1cf896b6a5598ae0f649.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/copilot-chat.fd1cb745afe35a3735d2.module.css">
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/copilot-markdown-rendering-f6845e8f5d6b.css">
        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/primer-react-6bae0b4b7a9d.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/react-core-62fd74d678e1.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/react-lib-2131e17288a8.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/octicons-react-611691cca2f6.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_emotion_is-prop-valid_dist_emotion-is-prop-valid_esm_js-node_modules_emo-62da9f-2df2f32ec596.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_stacktrace-parser_dist_s-e7dcdd-f7cc96ebae76.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_oddbird_popover-polyfill_dist_popover-fn_js-55fea94174bf.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_dompurify_dist_purify_js-b89b98661809.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_react-relay_index_js-c5b7ce0827d5.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_tanstack_query-core_build_modern_queryObserver_js-node_modules_tanstack_-defd52-843b41414e0e.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_remark-gfm_lib_index_js-node_modules_remark-parse_lib_index_js-node_modu-44d0fc-fe91074a0219.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_highlight_js_lib_index_js-node_modules_tanstack_react-query_build_modern-d366b9-e5ba7e8a050b.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_accname_dist_access-b37425-35bd8d94d981.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_hotkey_dist_index_-2c4211-d4ef351bc77f.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_paths_index_ts-a665ced57b80.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_ui-commands_ui-commands_ts-006e4d0cf710.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_item-picker_constants_labels_ts-ui_packages_item-picker_constants_values_ts-ui_pa-163a9a-1dfc031de5fd.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_item-picker_components_RepositoryPicker_tsx-87e4a7f5e8d3.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_copy-to-clipboard_CopyToClipboardButton_tsx-ui_packages_inline-autocomplete_Inlin-d7b165-a7c91db9dcfa.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_copilot-chat_utils_copilot-chat-helpers_ts-4c041da72097.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_copilot-chat_utils_copilot-chat-hooks_ts-ui_packages_issue-viewer_utils_queries_ts-f12e6efbfdde.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_test-id-props_test-id-props_ts-ui_packages_copilot-markdown_MarkdownRenderer_tsx--f736ee-7bc7c477e03d.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/copilot-chat-f290f4a67c47.js.descarga"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-react.1cf896b6a5598ae0f649.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/copilot-chat.fd1cb745afe35a3735d2.module.css">

<react-partial partial-name="copilot-chat" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"currentTopic":{"id":8664451,"name":"Countable","ownerLogin":"RadLikeWhoa","ownerType":"User","readmePath":"README.md","description":"Add live paragraph-, word- and character-counting to an HTML element.","commitOID":"830909246259037001a40cb3c309945263c07edb","ref":"refs/heads/master","refInfo":{"name":"master","type":"branch"},"visibility":"public","languages":[{"name":"JavaScript","percent":100.0}],"customInstructions":null},"findFileWorkerPath":"/assets-cdn/worker/find-file-worker-9f8a877aa99f.js","renderPopover":false,"renderBetaLabel":false,"chatIsVisible":true,"chatVisibleSettingPath":"/users/beto77-74/copilot_chat/settings/copilot_chat_visibility","ssoOrganizations":[],"agentsPath":"/github-copilot/chat/agents","apiURL":"https://api.individual.githubcopilot.com","currentUserLogin":"beto77-74","customInstructions":null,"renderKnowledgeBases":false,"optedInToPreviewFeatures":false,"optedInToUserFeedback":false,"renderAttachKnowledgeBaseHerePopover":true,"renderKnowledgeBaseAttachedToChatPopover":true,"personalInstructions":null,"reviewLab":false,"realIp":null,"scrollToTop":false,"hasCEorCBAccess":false,"licenseType":"unlicensed","quotas":null}}</script>
  <div data-target="react-partial.reactRoot"><div class="Box-sc-g0xbh4-0 bpDFns"></div><div class="Box-sc-g0xbh4-0 hmHhrt"></div><script type="application/json" id="__PRIMER_DATA_:r60:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>


      </react-partial-anchor>
    <react-partial-anchor data-catalyst="" _msthidden="1">
      <button id="global-copilot-menu-button" data-target="react-partial-anchor.anchor" aria-expanded="false" aria-labelledby="tooltip-eb4f45a8-d384-4c8e-9a6b-bfca6a5592b4" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button AppHeader-buttonRight" aria-haspopup="true">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down Button-visual">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg>
</button><tool-tip id="tooltip-eb4f45a8-d384-4c8e-9a6b-bfca6a5592b4" for="global-copilot-menu-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip" _msttexthash="2105493" _msthidden="1" _msthash="429"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Open Copilot…</tool-tip>

      
    
        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/global-copilot-menu-5f67a9f4a103.js.descarga"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-react.1cf896b6a5598ae0f649.module.css">

<react-partial partial-name="global-copilot-menu" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r10:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

      </react-partial-anchor>
</div>


        <div class="AppHeader-actions position-relative">
             <react-partial-anchor data-catalyst="">
      <button id="global-create-menu-anchor" aria-label="Crea algo nuevo" data-target="react-partial-anchor.anchor" type="button" data-view-component="true" class="AppHeader-button global-create-button Button--secondary Button--medium Button width-auto color-fg-muted" aria-describedby="tooltip-095adc8c-10a9-46c0-bd24-e8a8e440cfe4" _mstaria-label="233844" _msthash="430" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
      <span class="Button-visual Button-leadingVisual">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-plus">
    <path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path>
</svg>
      </span>
    <span class="Button-label"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-triangle-down">
    <path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path>
</svg></span>
  </span>
</button><tool-tip id="tooltip-095adc8c-10a9-46c0-bd24-e8a8e440cfe4" for="global-create-menu-anchor" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute" role="tooltip" _msttexthash="165399" _msthidden="1" _msthash="431"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Create new...</tool-tip>

      
    
        <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/ui_packages_promise-with-resolvers-polyfill_promise-with-resolvers-polyfill_ts-ui_packages_re-8d43b0-c023a065be5b.js.descarga"></script>
<script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/global-create-menu-ca4e5d618bcb.js.descarga"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-react.1cf896b6a5598ae0f649.module.css">

<react-partial partial-name="global-create-menu" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"createRepo":true,"importRepo":true,"codespaces":true,"gist":true,"createOrg":true,"createProject":false,"createProjectUrl":"/beto77-74?tab=projects","createLegacyProject":false,"createIssue":false,"org":null,"owner":"RadLikeWhoa","repo":"Countable"}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r13:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

      </react-partial-anchor>


          <a href="https://github.com/issues" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;ISSUES_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-bb97da86-5b67-453a-9a8e-82806c5cdf8f" aria-labelledby="tooltip-cc75deb6-916c-4bfc-a3b7-16a9c4b0c964" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened Button-visual">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
</a><tool-tip id="tooltip-cc75deb6-916c-4bfc-a3b7-16a9c4b0c964" for="icon-button-bb97da86-5b67-453a-9a8e-82806c5cdf8f" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip" _msttexthash="79651" _msthidden="1" _msthash="432"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Issues</tool-tip>

          <a href="https://github.com/pulls" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;PULL_REQUESTS_HEADER&quot;,&quot;label&quot;:null}" id="icon-button-41770394-67f0-479f-a370-f658ab580e4e" aria-labelledby="tooltip-c7843e68-3931-4c3b-8d1d-35674aaf2634" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request Button-visual">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
</a><tool-tip id="tooltip-c7843e68-3931-4c3b-8d1d-35674aaf2634" for="icon-button-41770394-67f0-479f-a370-f658ab580e4e" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip" _msttexthash="214734" _msthidden="1" _msthash="433"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Pull requests</tool-tip>

        </div>

        <notification-indicator data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTkwMTU1NzA3IiwidCI6MTczODIxMDYwMn0=--c8d1e4d91e2bf842c3b16e9299ed2d18a6f747cdb79e4331e95309feafbd5bba" data-indicator-mode="none" data-tooltip-global="You have unread notifications" data-tooltip-unavailable="Notifications are unavailable at the moment." data-tooltip-none="You have no unread notifications" data-header-redesign-enabled="true" data-fetch-indicator-src="/notifications/indicator" data-fetch-indicator-enabled="true" data-view-component="true" class="js-socket-channel" data-fetch-retry-delay-time="500" data-catalyst="" _msthidden="1">
    <a id="AppHeader-notifications-button" href="https://github.com/notifications" aria-labelledby="notification-indicator-tooltip" data-hotkey="g n" data-target="notification-indicator.link" data-analytics-event="{&quot;category&quot;:&quot;Global navigation&quot;,&quot;action&quot;:&quot;NOTIFICATIONS_HEADER&quot;,&quot;label&quot;:&quot;icon:read&quot;}" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium AppHeader-button color-fg-muted">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-inbox Button-visual">
    <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
</svg>
</a>

    <tool-tip id="notification-indicator-tooltip" data-target="notification-indicator.tooltip" for="AppHeader-notifications-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip" _msttexthash="801307" _msthidden="1" _msthash="434"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>You have no unread notifications</tool-tip>
</notification-indicator>

        <div class="AppHeader-user">
          <deferred-side-panel data-url="/_side-panels/user?repository_id=8664451" data-catalyst="">
  <include-fragment data-target="deferred-side-panel.fragment"><template shadowrootmode="open"><style>:host {display: block;}</style><slot></slot></template>
    <react-partial-anchor data-catalyst="">
  <button data-target="react-partial-anchor.anchor" data-login="beto77-74" aria-label="Abrir menú de navegación de usuario" type="button" data-view-component="true" class="Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0" _mstaria-label="964379" _msthash="435" aria-expanded="false" aria-haspopup="true">  <span class="Button-content">
    <span class="Button-label"><img src="./Countable_Countable_files/190155707" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle"></span>
  </span>
</button>
  

    <script crossorigin="anonymous" defer="defer" type="application/javascript" src="./Countable_Countable_files/global-user-nav-drawer-fe0431d44aec.js.descarga"></script>
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/primer-react.1cf896b6a5598ae0f649.module.css">
<link crossorigin="anonymous" media="all" rel="stylesheet" href="./Countable_Countable_files/global-user-nav-drawer.830d6c10c9fea7fc134e.module.css">

<react-partial partial-name="global-user-nav-drawer" data-ssr="false" data-attempted-ssr="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-partial.embeddedData">{"props":{"owner":{"login":"beto77-74","name":null,"avatarUrl":"https://avatars.githubusercontent.com/u/190155707?v=4"},"drawerId":"global-user-nav-drawer","lazyLoadItemDataFetchUrl":"/_side-panels/user.json","canAddAccount":true,"addAccountPath":"/login?add_account=1\u0026return_to=https%3A%2F%2Fgithub.com%2FRadLikeWhoa%2FCountable%2Fblob%2Fmaster%2FCountable.js","switchAccountPath":"/switch_account","loginAccountPath":"/login?add_account=1","projectsPath":"/beto77-74?tab=projects","gistsUrl":"https://gist.github.com/mine","docsUrl":"https://docs.github.com","yourEnterpriseUrl":null,"enterpriseSettingsUrl":null,"supportUrl":"https://support.github.com","showAccountSwitcher":true,"showCopilot":true,"showEnterprises":true,"showEnterprise":false,"showGists":true,"showOrganizations":true,"showSponsors":true,"showUpgrade":true,"showFeaturesPreviews":true,"showEnterpriseSettings":false,"createMenuProps":{"createRepo":true,"importRepo":true,"codespaces":true,"gist":true,"createOrg":true,"createProject":false,"createProjectUrl":"/beto77-74?tab=projects","createLegacyProject":false,"createIssue":false,"org":null,"owner":"RadLikeWhoa","repo":"Countable"}}}</script>
  <div data-target="react-partial.reactRoot"><script type="application/json" id="__PRIMER_DATA_:r16:__">{"resolvedServerColorMode":"day"}</script></div>
</react-partial>

  </react-partial-anchor>

  </include-fragment>
</deferred-side-panel>
        </div>

        <div class="position-absolute mt-2">
            
<site-header-logged-in-user-menu data-catalyst="">

</site-header-logged-in-user-menu>

        </div>
      </div>
    </div>


    
        <div class="AppHeader-localBar">
          <nav data-pjax="#js-repo-pjax-container" aria-label="Depósito" data-view-component="true" class="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav" _mstaria-label="165529" _msthash="436">

  <ul data-view-component="true" class="UnderlineNav-body list-style-none">
      <li data-view-component="true" class="d-inline-flex">
  <a id="code-tab" href="https://github.com/RadLikeWhoa/Countable" data-tab-item="i0code-tab" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments repo_attestations /RadLikeWhoa/Countable" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g c" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Code&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected" aria-current="page">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        <span data-content="Code" _msttexthash="88764" _msthash="437">Código</span>
          <span id="code-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="issues-tab" href="https://github.com/RadLikeWhoa/Countable/issues" data-tab-item="i1issues-tab" data-selected-links="repo_issues repo_labels repo_milestones /RadLikeWhoa/Countable/issues" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g i" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Issues&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        <span data-content="Issues" _msttexthash="160394" _msthash="438">Cuestiones</span>
          <span id="issues-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="10" data-view-component="true" class="Counter" _msttexthash="9451" _msthash="439">10</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="pull-requests-tab" href="https://github.com/RadLikeWhoa/Countable/pulls" data-tab-item="i2pull-requests-tab" data-selected-links="repo_pulls checks /RadLikeWhoa/Countable/pulls" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g p" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Pull requests&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        <span data-content="Pull requests" _msttexthash="1207765" _msthash="440">Solicitudes de incorporación de cambios</span>
          <span id="pull-requests-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter" _msttexthash="4368" _msthidden="1" _msthash="441">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="actions-tab" href="https://github.com/RadLikeWhoa/Countable/actions" data-tab-item="i3actions-tab" data-selected-links="repo_actions /RadLikeWhoa/Countable/actions" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g a" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Actions&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        <span data-content="Actions" _msttexthash="112476" _msthash="442">Acciones</span>
          <span id="actions-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="projects-tab" href="https://github.com/RadLikeWhoa/Countable/projects" data-tab-item="i4projects-tab" data-selected-links="repo_projects new_repo_project repo_project /RadLikeWhoa/Countable/projects" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g b" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Projects&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        <span data-content="Projects" _msttexthash="139971" _msthash="443">Proyectos</span>
          <span id="projects-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="0" hidden="hidden" data-view-component="true" class="Counter" _msttexthash="4368" _msthidden="1" _msthash="444">0</span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="wiki-tab" href="https://github.com/RadLikeWhoa/Countable/wiki" data-tab-item="i5wiki-tab" data-selected-links="repo_wiki /RadLikeWhoa/Countable/wiki" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g w" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Wiki&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
</svg>
        <span data-content="Wiki" _msttexthash="45006" _msthash="445">Wiki</span>
          <span id="wiki-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="security-tab" href="https://github.com/RadLikeWhoa/Countable/security" data-tab-item="i6security-tab" data-selected-links="security overview alerts policy token_scanning code_scanning /RadLikeWhoa/Countable/security" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-hotkey="g s" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Security&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span data-content="Security" _msttexthash="132054" _msthash="446">Seguridad</span>
          

    
</a></li>
      <li data-view-component="true" class="d-inline-flex">
  <a id="insights-tab" href="https://github.com/RadLikeWhoa/Countable/pulse" data-tab-item="i7insights-tab" data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /RadLikeWhoa/Countable/pulse" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame" data-analytics-event="{&quot;category&quot;:&quot;Underline navbar&quot;,&quot;action&quot;:&quot;Click tab&quot;,&quot;label&quot;:&quot;Insights&quot;,&quot;target&quot;:&quot;UNDERLINE_NAV.TAB&quot;}" data-view-component="true" class="UnderlineNav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item">
    
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        <span data-content="Insights" _msttexthash="57915" _msthash="447">Ideas</span>
          <span id="insights-repo-tab-count" data-pjax-replace="" data-turbo-replace="" title="Not available" data-view-component="true" class="Counter"></span>


    
</a></li>
</ul>
    <div style="visibility:hidden;" data-view-component="true" class="UnderlineNav-actions js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0" _msthidden="9">      <action-menu data-select-variant="none" data-view-component="true" data-catalyst="" _msthidden="9">
  <focus-group direction="vertical" mnemonics="" retain="" _msthidden="9">
    <button id="action-menu-af2276b8-6c2a-4d5e-a632-adb75ab47039-button" popovertarget="action-menu-af2276b8-6c2a-4d5e-a632-adb75ab47039-overlay" aria-controls="action-menu-af2276b8-6c2a-4d5e-a632-adb75ab47039-list" aria-haspopup="true" aria-labelledby="tooltip-bb79cbcf-4e37-42b3-94a9-e46522994de0" type="button" data-view-component="true" class="Button Button--iconOnly Button--secondary Button--medium UnderlineNav-item">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-kebab-horizontal Button-visual">
    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
</svg>
</button><tool-tip id="tooltip-bb79cbcf-4e37-42b3-94a9-e46522994de0" for="action-menu-af2276b8-6c2a-4d5e-a632-adb75ab47039-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip" _msttexthash="759044" _msthidden="1" _msthash="448"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Additional navigation options</tool-tip>


<anchored-position data-target="action-menu.overlay" id="action-menu-af2276b8-6c2a-4d5e-a632-adb75ab47039-overlay" anchor="action-menu-af2276b8-6c2a-4d5e-a632-adb75ab47039-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true" _msthidden="8" style="inset: 36px auto auto 0px;">
  <div data-view-component="true" class="Overlay Overlay--size-auto" _msthidden="8">
    
      <div data-view-component="true" class="Overlay-body Overlay-body--paddingNone" _msthidden="8">          <action-list data-catalyst="" _msthidden="8">
  <div data-view-component="true" _msthidden="8">
    <ul aria-labelledby="action-menu-af2276b8-6c2a-4d5e-a632-adb75ab47039-button" id="action-menu-af2276b8-6c2a-4d5e-a632-adb75ab47039-list" role="menu" data-view-component="true" class="ActionListWrap--inset ActionListWrap" _msthidden="8">
        <li hidden="" data-menu-item="i0code-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a tabindex="-1" id="item-45866e40-8aaa-41bf-9123-a0f91d6cf824" href="https://github.com/RadLikeWhoa/Countable" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-code">
    <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="42471" _msthidden="1" _msthash="449">
          Code
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i1issues-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a tabindex="-1" id="item-f3533635-717c-4202-8c88-c8d62a0af972" href="https://github.com/RadLikeWhoa/Countable/issues" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="79651" _msthidden="1" _msthash="450">
          Issues
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i2pull-requests-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a tabindex="-1" id="item-6a49cf37-6398-4c42-bb49-f9aab95b8723" href="https://github.com/RadLikeWhoa/Countable/pulls" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-git-pull-request">
    <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="214734" _msthidden="1" _msthash="451">
          Pull requests
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i3actions-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a tabindex="-1" id="item-2fc35d6e-39f3-40ab-b9f3-d3ad937e6311" href="https://github.com/RadLikeWhoa/Countable/actions" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-play">
    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="95901" _msthidden="1" _msthash="452">
          Actions
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i4projects-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a tabindex="-1" id="item-98d788ae-e7a6-44c7-81f1-3087666869c0" href="https://github.com/RadLikeWhoa/Countable/projects" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-table">
    <path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="116324" _msthidden="1" _msthash="453">
          Projects
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i5wiki-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a tabindex="-1" id="item-1246cb2a-f15f-44e8-917e-92eb70a7e64b" href="https://github.com/RadLikeWhoa/Countable/wiki" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-book">
    <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="45006" _msthidden="1" _msthash="454">
          Wiki
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i6security-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a tabindex="-1" id="item-a4e71e0f-b1e6-427d-9448-2e2f20a56ed6" href="https://github.com/RadLikeWhoa/Countable/security" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-shield">
    <path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="119158" _msthidden="1" _msthash="455">
          Security
</span>      
</a>
  
</li>
        <li hidden="" data-menu-item="i7insights-tab" data-targets="action-list.items" role="none" data-view-component="true" class="ActionListItem" _msthidden="1">
    
    
    <a tabindex="-1" id="item-8d5fef6c-4044-497d-b62a-93d11acbafbc" href="https://github.com/RadLikeWhoa/Countable/pulse" role="menuitem" data-view-component="true" class="ActionListContent ActionListContent--visual16" _msthidden="1">
        <span class="ActionListItem-visual ActionListItem-visual--leading">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-graph">
    <path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path>
</svg>
        </span>
      
        <span data-view-component="true" class="ActionListItem-label" _msttexthash="116675" _msthidden="1" _msthash="456">
          Insights
</span>      
</a>
  
</li>
</ul>    
</div></action-list>


</div>
      
</div></anchored-position>  </focus-group>
</action-menu></div>
</nav>
        </div>
</header>


      <div hidden="hidden" data-view-component="true" class="js-stale-session-flash stale-session-flash flash flash-warn flash-full" _msthidden="4">
  
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
        <span class="js-stale-session-flash-signed-in" hidden="" _msttexthash="3099863" _msthidden="1" _msthash="457">You signed in with another tab or window. <a class="Link--inTextBlock" href="https://github.com/RadLikeWhoa/Countable/blob/master/Countable.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-signed-out" hidden="" _msttexthash="3008863" _msthidden="1" _msthash="458">You signed out in another tab or window. <a class="Link--inTextBlock" href="https://github.com/RadLikeWhoa/Countable/blob/master/Countable.js">Reload</a> to refresh your session.</span>
        <span class="js-stale-session-flash-switched" hidden="" _msttexthash="3686319" _msthidden="1" _msthash="459">You switched accounts on another tab or window. <a class="Link--inTextBlock" href="https://github.com/RadLikeWhoa/Countable/blob/master/Countable.js">Reload</a> to refresh your session.</span>

    <button id="icon-button-dfcc42d7-2515-44eb-b9d7-5c2f885eebdc" aria-labelledby="tooltip-bed06544-2112-4796-bae3-bb3dd4f8b727" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium flash-close js-flash-close">  <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x Button-visual">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
</button><tool-tip id="tooltip-bed06544-2112-4796-bae3-bb3dd4f8b727" for="icon-button-dfcc42d7-2515-44eb-b9d7-5c2f885eebdc" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute" aria-hidden="true" role="tooltip" _msttexthash="209183" _msthidden="1" _msthash="460"><template shadowrootmode="open"><style>
      :host {
        --tooltip-top: var(--tool-tip-position-top, 0);
        --tooltip-left: var(--tool-tip-position-left, 0);
        padding: var(--overlay-paddingBlock-condensed) var(--overlay-padding-condensed) !important;
        font: var(--text-body-shorthand-small);
        color: var(--tooltip-fgColor, var(--fgColor-onEmphasis)) !important;
        text-align: center;
        text-decoration: none;
        text-shadow: none;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: break-word;
        white-space: pre;
        background: var(--tooltip-bgColor, var(--bgColor-emphasis)) !important;
        border-radius: var(--borderRadius-medium);
        border: 0 !important;
        opacity: 0;
        max-width: var(--overlay-width-small);
        word-wrap: break-word;
        white-space: normal;
        width: max-content !important;
        inset: var(--tooltip-top) auto auto var(--tooltip-left) !important;
        overflow: visible !important;
        text-wrap: balance;
      }

      :host(:is(.tooltip-n, .tooltip-nw, .tooltip-ne)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) - var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(:is(.tooltip-s, .tooltip-sw, .tooltip-se)) {
        --tooltip-top: calc(var(--tool-tip-position-top, 0) + var(--overlay-offset, 0.25rem));
        --tooltip-left: var(--tool-tip-position-left);
      }

      :host(.tooltip-w) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) - var(--overlay-offset, 0.25rem));
      }

      :host(.tooltip-e) {
        --tooltip-top: var(--tool-tip-position-top);
        --tooltip-left: calc(var(--tool-tip-position-left, 0) + var(--overlay-offset, 0.25rem));
      }

      :host:after{
        position: absolute;
        display: block;
        right: 0;
        left: 0;
        height: var(--overlay-offset, 0.25rem);
        content: "";
      }

      :host(.tooltip-s):after,
      :host(.tooltip-se):after,
      :host(.tooltip-sw):after {
        bottom: 100%
      }

      :host(.tooltip-n):after,
      :host(.tooltip-ne):after,
      :host(.tooltip-nw):after {
        top: 100%;
      }

      @keyframes tooltip-appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      :host(:popover-open),
      :host(:popover-open):before {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      :host(.\:popover-open) {
        animation-name: tooltip-appear;
        animation-duration: .1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in;
      }

      @media (forced-colors: active) {
        :host {
          outline: solid 1px transparent;
        }

        :host:before {
          display: none;
        }
      }
    </style><slot></slot></template>Dismiss alert</tool-tip>


  
</div>
          
    </div>

  <div id="start-of-content" class="show-on-focus"></div>








    <div id="js-flash-container" class="flash-container" data-turbo-replace="">




  <template class="js-flash-template"></template>
</div>


    
  <notification-shelf-watcher data-base-url="https://github.com/notifications/beta/shelf" data-channel="eyJjIjoibm90aWZpY2F0aW9uLWNoYW5nZWQ6MTkwMTU1NzA3IiwidCI6MTczODIxMDYwMn0=--c8d1e4d91e2bf842c3b16e9299ed2d18a6f747cdb79e4331e95309feafbd5bba" data-view-component="true" class="js-socket-channel" data-refresh-delay="500" data-catalyst="" data-throttle-delay="5000"></notification-shelf-watcher>
  <div hidden="" data-initial="" data-target="notification-shelf-watcher.placeholder"></div>






  <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="" data-project-hovercards-enabled="">
        <div itemscope="" itemtype="http://schema.org/SoftwareSourceCode" class="">
    <main id="js-repo-pjax-container">
      
      






    
  <div id="repository-container-header" data-turbo-replace="" hidden=""></div>




<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">
    <div id="repo-content-pjax-container" class="repository-content ">
      <a href="https://github.dev/" class="d-none js-github-dev-shortcut" data-hotkey=".,Mod+Alt+." _msttexthash="305370" _msthidden="1" _msthash="461">Open in github.dev</a>
  <a href="https://github.dev/" class="d-none js-github-dev-new-tab-shortcut" data-hotkey="Shift+.,Shift+&gt;,&gt;" target="_blank" rel="noopener noreferrer" _msttexthash="551616" _msthidden="1" _msthash="462">Open in a new github.dev tab</a>
    <a class="d-none" data-hotkey=",,Mod+Alt+," target="_blank" href="https://github.com/codespaces/new/RadLikeWhoa/Countable/tree/master?resume=1" _msttexthash="283465" _msthidden="1" _msthash="463">Open in codespace</a>




    
      
    








<react-app app-name="react-code-view" initial-path="/RadLikeWhoa/Countable/blob/master/Countable.js" style="display: block; min-height: calc(100vh - 64px);" data-attempted-ssr="true" data-ssr="true" data-lazy="false" data-alternate="false" data-data-router-enabled="false" data-catalyst="" class="loaded">
  
  <script type="application/json" data-target="react-app.embeddedData">{"payload":{"allShortcutsEnabled":true,"fileTree":{"":{"items":[{"name":"test","path":"test","contentType":"directory"},{"name":".gitignore","path":".gitignore","contentType":"file"},{"name":".jshintrc","path":".jshintrc","contentType":"file"},{"name":".travis.yml","path":".travis.yml","contentType":"file"},{"name":"CONTRIBUTING.md","path":"CONTRIBUTING.md","contentType":"file"},{"name":"Countable.js","path":"Countable.js","contentType":"file"},{"name":"Countable.min.js","path":"Countable.min.js","contentType":"file"},{"name":"LICENSE.md","path":"LICENSE.md","contentType":"file"},{"name":"README.md","path":"README.md","contentType":"file"},{"name":"index.d.ts","path":"index.d.ts","contentType":"file"},{"name":"karma.conf.js","path":"karma.conf.js","contentType":"file"},{"name":"package.json","path":"package.json","contentType":"file"},{"name":"yarn.lock","path":"yarn.lock","contentType":"file"}],"totalCount":13}},"fileTreeProcessingTime":2.941463,"foldersToFetch":[],"repo":{"id":8664451,"defaultBranch":"master","name":"Countable","ownerLogin":"RadLikeWhoa","currentUserCanPush":false,"isFork":false,"isEmpty":false,"createdAt":"2013-03-08T22:20:42.000-05:00","ownerAvatar":"https://avatars.githubusercontent.com/u/1138459?v=4","public":true,"private":false,"isOrgOwned":false},"codeLineWrapEnabled":false,"symbolsExpanded":true,"treeExpanded":true,"refInfo":{"name":"master","listCacheKey":"v0:1499946268.0","canEdit":true,"refType":"branch","currentOid":"830909246259037001a40cb3c309945263c07edb"},"path":"Countable.js","currentUser":{"id":190155707,"login":"beto77-74","userEmail":"carlos.estupinan@hotmail.com"},"blob":{"rawLines":["/**"," * Countable is a script to allow for live paragraph-, word- and character-"," * counting on an HTML element."," *"," * @author   Sacha Schmid (\u003chttps://github.com/RadLikeWhoa\u003e)"," * @version  3.0.1"," * @license  MIT"," * @see      \u003chttp://radlikewhoa.github.io/Countable/\u003e"," */","","/**"," * Note: For the purpose of this internal documentation, arguments of the type"," * {Nodes} are to be interpreted as either {NodeList} or {Element}."," */","",";(function (global) {","  'use strict'","","  /**","   * @private","   *","   * `liveElements` holds all elements that have the live-counting","   * functionality bound to them.","   */","","  let liveElements = []","  const each = Array.prototype.forEach","","  /**","   * `ucs2decode` function from the punycode.js library.","   *","   * Creates an array containing the decimal code points of each Unicode","   * character in the string. While JavaScript uses UCS-2 internally, this","   * function will convert a pair of surrogate halves (each of which UCS-2","   * exposes as separate characters) into a single code point, matching","   * UTF-16.","   *","   * @see     \u003chttp://goo.gl/8M09r\u003e","   * @see     \u003chttp://goo.gl/u4UUC\u003e","   *","   * @param   {String}  string   The Unicode input string (UCS-2).","   *","   * @return  {Array}   The new array of code points.","   */","","  function decode (string) {","    const output = []","  \tlet counter = 0","  \tconst length = string.length","","  \twhile (counter \u003c length) {","  \t\tconst value = string.charCodeAt(counter++)","","  \t\tif (value \u003e= 0xD800 \u0026\u0026 value \u003c= 0xDBFF \u0026\u0026 counter \u003c length) {","","  \t\t\t// It's a high surrogate, and there is a next character.","","  \t\t\tconst extra = string.charCodeAt(counter++)","","  \t\t\tif ((extra \u0026 0xFC00) == 0xDC00) { // Low surrogate.","  \t\t\t\toutput.push(((value \u0026 0x3FF) \u003c\u003c 10) + (extra \u0026 0x3FF) + 0x10000)","  \t\t\t} else {","","  \t\t\t\t// It's an unmatched surrogate; only append this code unit, in case the","  \t\t\t\t// next code unit is the high surrogate of a surrogate pair.","","  \t\t\t\toutput.push(value)","  \t\t\t\tcounter--","  \t\t\t}","  \t\t} else {","  \t\t\toutput.push(value)","  \t\t}","  \t}","","  \treturn output","  }","","  /**","   * `validateArguments` validates the arguments given to each function call.","   * Errors are logged to the console as warnings, but Countable fails","   * silently.","   *","   * @private","   *","   * @param   {Nodes|String}  targets   A (collection of) element(s) or a single","\t *                                    string to validate.","   *","   * @param   {Function}      callback  The callback function to validate.","   *","   * @return  {Boolean}       Returns whether all arguments are valid.","   */","","  function validateArguments (targets, callback) {","    const nodes = Object.prototype.toString.call(targets)","    const targetsValid = typeof targets === 'string' || ((nodes === '[object NodeList]' || nodes === '[object HTMLCollection]') || targets.nodeType === 1)","    const callbackValid = typeof callback === 'function'","","    if (!targetsValid) console.error('Countable: Not a valid target')","    if (!callbackValid) console.error('Countable: Not a valid callback function')","","    return targetsValid \u0026\u0026 callbackValid","  }","","  /**","   * `count` trims an element's value, optionally strips HTML tags and counts","   * paragraphs, sentences, words, characters and characters plus spaces.","   *","   * @private","   *","   * @param   {Node|String}  target   The target for the count.","   *","   * @param   {Object}   \t   options  The options to use for the counting.","   *","   * @return  {Object}       The object containing the number of paragraphs,","   *                         sentences, words, characters and characters","\t *                         plus spaces.","   */","","  function count (target, options) {","    let original = '' + (typeof target === 'string' ? target : ('value' in target ? target.value : target.textContent))","    options = options || {}","","    /**","     * The initial implementation to allow for HTML tags stripping was created","     * @craniumslows while the current one was created by @Rob--W.","     *","     * @see \u003chttp://goo.gl/Exmlr\u003e","     * @see \u003chttp://goo.gl/gFQQh\u003e","     */","","    if (options.stripTags) original = original.replace(/\u003c\\/?[a-z][^\u003e]*\u003e/gi, '')","","    if (options.ignore) {","        each.call(options.ignore, function (i) {","            original = original.replace(i, '')","        })","    }","","    const trimmed = original.trim()","","    /**","     * Most of the performance improvements are based on the works of @epmatsw.","     *","     * @see \u003chttp://goo.gl/SWOLB\u003e","     */","","    return {","      paragraphs: trimmed ? (trimmed.match(options.hardReturns ? /\\n{2,}/g : /\\n+/g) || []).length + 1 : 0,","      sentences: trimmed ? (trimmed.match(/[.?!…]+./g) || []).length + 1 : 0,","      words: trimmed ? (trimmed.replace(/['\";:,.?¿\\-!¡]+/g, '').match(/\\S+/g) || []).length : 0,","      characters: trimmed ? decode(trimmed.replace(/\\s/g, '')).length : 0,","      all: decode(original).length","    }","  }","","  /**","   * This is the main object that will later be exposed to other scripts. It","   * holds all the public methods that can be used to enable the Countable","   * functionality.","   *","   * Some methods accept an optional options parameter. This includes the","   * following options.","   *","   * {Boolean}      hardReturns  Use two returns to seperate a paragraph","   *                             instead of one. (default: false)","   * {Boolean}      stripTags    Strip HTML tags before counting the values.","   *                             (default: false)","   * {Array\u003cChar\u003e}  ignore       A list of characters that should be removed","   *                             ignored when calculating the counters.","   *                             (default: )","   */","","  const Countable = {","","    /**","     * The `on` method binds the counting handler to all given elements. The","     * event is either `oninput` or `onkeydown`, based on the capabilities of","     * the browser.","     *","     * @param   {Nodes}     elements   All elements that should receive the","     *                                 Countable functionality.","     *","     * @param   {Function}  callback   The callback to fire whenever the","     *                                 element's value changes. The callback is","     *                                 called with the relevant element bound","     *                                 to `this` and the counted values as the","     *                                 single parameter.","     *","     * @param   {Object}    [options]  An object to modify Countable's","     *                                 behaviour.","     *","     * @return  {Object}    Returns the Countable object to allow for chaining.","     */","","    on: function (elements, callback, options) {","      if (!validateArguments(elements, callback)) return","","      if (!Array.isArray(elements)) {","          elements = [ elements ]","      }","","      each.call(elements, function (e) {","          const handler = function () {","            callback.call(e, count(e, options))","          }","","          liveElements.push({ element: e, handler: handler })","","          handler()","","          e.addEventListener('input', handler)","      })","","      return this","    },","","    /**","     * The `off` method removes the Countable functionality from all given","     * elements.","     *","     * @param   {Nodes}   elements  All elements whose Countable functionality","     *                              should be unbound.","     *","     * @return  {Object}  Returns the Countable object to allow for chaining.","     */","","    off: function (elements) {","      if (!validateArguments(elements, function () {})) return","","      if (!Array.isArray(elements)) {","          elements = [ elements ]","      }","","      liveElements.filter(function (e) {","          return elements.indexOf(e.element) !== -1","      }).forEach(function (e) {","          e.element.removeEventListener('input', e.handler)","      })","","      liveElements = liveElements.filter(function (e) {","          return elements.indexOf(e.element) === -1","      })","","      return this","    },","","    /**","     * The `count` method works mostly like the `live` method, but no events are","     * bound, the functionality is only executed once.","     *","     * @param   {Nodes|String}  targets   All elements that should be counted.","     *","     * @param   {Function}      callback   The callback to fire whenever the","     *                                     element's value changes. The callback","\t\t *                                     is called with the relevant element","\t\t *                                     bound to `this` and the counted values","\t\t *                                     as the single parameter.","     *","     * @param   {Object}        [options]  An object to modify Countable's","     *                                     behaviour.","     *","     * @return  {Object}    Returns the Countable object to allow for chaining.","     */","","    count: function (targets, callback, options) {","      if (!validateArguments(targets, callback)) return","","      if (!Array.isArray(targets)) {","          targets = [ targets ]","      }","","      each.call(targets, function (e) {","          callback.call(e, count(e, options))","      })","","      return this","    },","","    /**","     * The `enabled` method checks if the live-counting functionality is bound","     * to an element.","     *","     * @param   {Node}     element  All elements that should be checked for the","     *                              Countable functionality.","     *","     * @return  {Boolean}  A boolean value representing whether Countable","     *                     functionality is bound to all given elements.","     */","","    enabled: function (elements) {","      if (elements.length === undefined) {","        elements = [ elements ]","      }","","      return liveElements.filter(function (e) {","          return elements.indexOf(e.element) !== -1","      }).length === elements.length","    }","","  }","","  /**","   * Expose Countable depending on the module system used across the","   * application. (Node / CommonJS, AMD, global)","   */","","  if (typeof exports === 'object') {","    module.exports = Countable","  } else if (typeof define === 'function' \u0026\u0026 define.amd) {","    define(function () { return Countable })","  } else {","    global.Countable = Countable","  }","}(this));"],"stylingDirectives":[[[0,3,"pl-c"]],[[0,75,"pl-c"]],[[0,31,"pl-c"]],[[0,2,"pl-c"]],[[0,60,"pl-c"],[3,10,"pl-k"]],[[0,18,"pl-c"],[3,11,"pl-k"]],[[0,16,"pl-c"],[3,11,"pl-k"]],[[0,54,"pl-c"],[3,7,"pl-k"]],[[0,3,"pl-c"]],[],[[0,3,"pl-c"]],[[0,78,"pl-c"]],[[0,67,"pl-c"]],[[0,3,"pl-c"]],[],[[0,1,"pl-kos"],[1,2,"pl-kos"],[2,10,"pl-k"],[11,12,"pl-kos"],[12,18,"pl-s1"],[18,19,"pl-kos"],[20,21,"pl-kos"]],[[2,14,"pl-s"]],[],[[2,5,"pl-c"]],[[0,13,"pl-c"],[5,13,"pl-k"]],[[0,4,"pl-c"]],[[0,66,"pl-c"]],[[0,33,"pl-c"]],[[0,5,"pl-c"]],[],[[2,5,"pl-k"],[6,18,"pl-s1"],[19,20,"pl-c1"],[21,22,"pl-kos"],[22,23,"pl-kos"]],[[2,7,"pl-k"],[8,12,"pl-s1"],[13,14,"pl-c1"],[15,20,"pl-v"],[20,21,"pl-kos"],[21,30,"pl-c1"],[30,31,"pl-kos"],[31,38,"pl-c1"]],[],[[2,5,"pl-c"]],[[0,56,"pl-c"]],[[0,4,"pl-c"]],[[0,72,"pl-c"]],[[0,74,"pl-c"]],[[0,74,"pl-c"]],[[0,71,"pl-c"]],[[0,12,"pl-c"]],[[0,4,"pl-c"]],[[0,35,"pl-c"],[5,9,"pl-k"]],[[0,35,"pl-c"],[5,9,"pl-k"]],[[0,4,"pl-c"]],[[0,66,"pl-c"],[5,11,"pl-k"],[15,21,"pl-smi"]],[[0,4,"pl-c"]],[[0,53,"pl-c"],[5,12,"pl-k"],[15,20,"pl-smi"]],[[0,5,"pl-c"]],[],[[2,10,"pl-k"],[11,17,"pl-en"],[18,19,"pl-kos"],[19,25,"pl-s1"],[25,26,"pl-kos"],[27,28,"pl-kos"]],[[4,9,"pl-k"],[10,16,"pl-s1"],[17,18,"pl-c1"],[19,20,"pl-kos"],[20,21,"pl-kos"]],[[3,6,"pl-k"],[7,14,"pl-s1"],[15,16,"pl-c1"],[17,18,"pl-c1"]],[[3,8,"pl-k"],[9,15,"pl-s1"],[16,17,"pl-c1"],[18,24,"pl-s1"],[24,25,"pl-kos"],[25,31,"pl-c1"]],[],[[3,8,"pl-k"],[9,10,"pl-kos"],[10,17,"pl-s1"],[18,19,"pl-c1"],[20,26,"pl-s1"],[26,27,"pl-kos"],[28,29,"pl-kos"]],[[4,9,"pl-k"],[10,15,"pl-s1"],[16,17,"pl-c1"],[18,24,"pl-s1"],[24,25,"pl-kos"],[25,35,"pl-en"],[35,36,"pl-kos"],[36,43,"pl-s1"],[43,45,"pl-c1"],[45,46,"pl-kos"]],[],[[4,6,"pl-k"],[7,8,"pl-kos"],[8,13,"pl-s1"],[14,16,"pl-c1"],[17,23,"pl-c1"],[24,26,"pl-c1"],[27,32,"pl-s1"],[33,35,"pl-c1"],[36,42,"pl-c1"],[43,45,"pl-c1"],[46,53,"pl-s1"],[54,55,"pl-c1"],[56,62,"pl-s1"],[62,63,"pl-kos"],[64,65,"pl-kos"]],[],[[5,61,"pl-c"]],[],[[5,10,"pl-k"],[11,16,"pl-s1"],[17,18,"pl-c1"],[19,25,"pl-s1"],[25,26,"pl-kos"],[26,36,"pl-en"],[36,37,"pl-kos"],[37,44,"pl-s1"],[44,46,"pl-c1"],[46,47,"pl-kos"]],[],[[5,7,"pl-k"],[8,9,"pl-kos"],[9,10,"pl-kos"],[10,15,"pl-s1"],[16,17,"pl-c1"],[18,24,"pl-c1"],[24,25,"pl-kos"],[26,28,"pl-c1"],[29,35,"pl-c1"],[35,36,"pl-kos"],[37,38,"pl-kos"],[39,56,"pl-c"]],[[6,12,"pl-s1"],[12,13,"pl-kos"],[13,17,"pl-en"],[17,18,"pl-kos"],[18,19,"pl-kos"],[19,20,"pl-kos"],[20,25,"pl-s1"],[26,27,"pl-c1"],[28,33,"pl-c1"],[33,34,"pl-kos"],[35,37,"pl-c1"],[38,40,"pl-c1"],[40,41,"pl-kos"],[42,43,"pl-c1"],[44,45,"pl-kos"],[45,50,"pl-s1"],[51,52,"pl-c1"],[53,58,"pl-c1"],[58,59,"pl-kos"],[60,61,"pl-c1"],[62,69,"pl-c1"],[69,70,"pl-kos"]],[[5,6,"pl-kos"],[7,11,"pl-k"],[12,13,"pl-kos"]],[],[[6,77,"pl-c"]],[[6,66,"pl-c"]],[],[[6,12,"pl-s1"],[12,13,"pl-kos"],[13,17,"pl-en"],[17,18,"pl-kos"],[18,23,"pl-s1"],[23,24,"pl-kos"]],[[6,13,"pl-s1"],[13,15,"pl-c1"]],[[5,6,"pl-kos"]],[[4,5,"pl-kos"],[6,10,"pl-k"],[11,12,"pl-kos"]],[[5,11,"pl-s1"],[11,12,"pl-kos"],[12,16,"pl-en"],[16,17,"pl-kos"],[17,22,"pl-s1"],[22,23,"pl-kos"]],[[4,5,"pl-kos"]],[[3,4,"pl-kos"]],[],[[3,9,"pl-k"],[10,16,"pl-s1"]],[[2,3,"pl-kos"]],[],[[2,5,"pl-c"]],[[0,77,"pl-c"]],[[0,70,"pl-c"]],[[0,14,"pl-c"]],[[0,4,"pl-c"]],[[0,13,"pl-c"],[5,13,"pl-k"]],[[0,4,"pl-c"]],[[0,80,"pl-c"],[5,11,"pl-k"],[15,27,"pl-smi"]],[[0,58,"pl-c"]],[[0,4,"pl-c"]],[[0,74,"pl-c"],[5,11,"pl-k"],[15,23,"pl-smi"]],[[0,4,"pl-c"]],[[0,70,"pl-c"],[5,12,"pl-k"],[15,22,"pl-smi"]],[[0,5,"pl-c"]],[],[[2,10,"pl-k"],[11,28,"pl-en"],[29,30,"pl-kos"],[30,37,"pl-s1"],[37,38,"pl-kos"],[39,47,"pl-s1"],[47,48,"pl-kos"],[49,50,"pl-kos"]],[[4,9,"pl-k"],[10,15,"pl-s1"],[16,17,"pl-c1"],[18,24,"pl-v"],[24,25,"pl-kos"],[25,34,"pl-c1"],[34,35,"pl-kos"],[35,43,"pl-c1"],[43,44,"pl-kos"],[44,48,"pl-en"],[48,49,"pl-kos"],[49,56,"pl-s1"],[56,57,"pl-kos"]],[[4,9,"pl-k"],[10,22,"pl-s1"],[23,24,"pl-c1"],[25,31,"pl-k"],[32,39,"pl-s1"],[40,43,"pl-c1"],[44,52,"pl-s"],[53,55,"pl-c1"],[56,57,"pl-kos"],[57,58,"pl-kos"],[58,63,"pl-s1"],[64,67,"pl-c1"],[68,87,"pl-s"],[88,90,"pl-c1"],[91,96,"pl-s1"],[97,100,"pl-c1"],[101,126,"pl-s"],[126,127,"pl-kos"],[128,130,"pl-c1"],[131,138,"pl-s1"],[138,139,"pl-kos"],[139,147,"pl-c1"],[148,151,"pl-c1"],[152,153,"pl-c1"],[153,154,"pl-kos"]],[[4,9,"pl-k"],[10,23,"pl-s1"],[24,25,"pl-c1"],[26,32,"pl-k"],[33,41,"pl-s1"],[42,45,"pl-c1"],[46,56,"pl-s"]],[],[[4,6,"pl-k"],[7,8,"pl-kos"],[8,9,"pl-c1"],[9,21,"pl-s1"],[21,22,"pl-kos"],[23,30,"pl-smi"],[30,31,"pl-kos"],[31,36,"pl-en"],[36,37,"pl-kos"],[37,68,"pl-s"],[68,69,"pl-kos"]],[[4,6,"pl-k"],[7,8,"pl-kos"],[8,9,"pl-c1"],[9,22,"pl-s1"],[22,23,"pl-kos"],[24,31,"pl-smi"],[31,32,"pl-kos"],[32,37,"pl-en"],[37,38,"pl-kos"],[38,80,"pl-s"],[80,81,"pl-kos"]],[],[[4,10,"pl-k"],[11,23,"pl-s1"],[24,26,"pl-c1"],[27,40,"pl-s1"]],[[2,3,"pl-kos"]],[],[[2,5,"pl-c"]],[[0,77,"pl-c"]],[[0,73,"pl-c"]],[[0,4,"pl-c"]],[[0,13,"pl-c"],[5,13,"pl-k"]],[[0,4,"pl-c"]],[[0,63,"pl-c"],[5,11,"pl-k"],[15,26,"pl-smi"]],[[0,4,"pl-c"]],[[0,74,"pl-c"],[5,11,"pl-k"],[15,21,"pl-smi"]],[[0,4,"pl-c"]],[[0,76,"pl-c"],[5,12,"pl-k"],[15,21,"pl-smi"]],[[0,72,"pl-c"]],[[0,40,"pl-c"]],[[0,5,"pl-c"]],[],[[2,10,"pl-k"],[11,16,"pl-en"],[17,18,"pl-kos"],[18,24,"pl-s1"],[24,25,"pl-kos"],[26,33,"pl-s1"],[33,34,"pl-kos"],[35,36,"pl-kos"]],[[4,7,"pl-k"],[8,16,"pl-s1"],[17,18,"pl-c1"],[19,21,"pl-s"],[22,23,"pl-c1"],[24,25,"pl-kos"],[25,31,"pl-k"],[32,38,"pl-s1"],[39,42,"pl-c1"],[43,51,"pl-s"],[54,60,"pl-s1"],[63,64,"pl-kos"],[64,71,"pl-s"],[72,74,"pl-k"],[75,81,"pl-s1"],[84,90,"pl-s1"],[90,91,"pl-kos"],[91,96,"pl-c1"],[99,105,"pl-s1"],[105,106,"pl-kos"],[106,117,"pl-c1"],[117,118,"pl-kos"],[118,119,"pl-kos"]],[[4,11,"pl-s1"],[12,13,"pl-c1"],[14,21,"pl-s1"],[22,24,"pl-c1"],[25,26,"pl-kos"],[26,27,"pl-kos"]],[],[[4,7,"pl-c"]],[[0,78,"pl-c"]],[[0,66,"pl-c"],[7,20,"pl-k"]],[[0,6,"pl-c"]],[[0,33,"pl-c"],[7,11,"pl-k"]],[[0,33,"pl-c"],[7,11,"pl-k"]],[[0,7,"pl-c"]],[],[[4,6,"pl-k"],[7,8,"pl-kos"],[8,15,"pl-s1"],[15,16,"pl-kos"],[16,25,"pl-c1"],[25,26,"pl-kos"],[27,35,"pl-s1"],[36,37,"pl-c1"],[38,46,"pl-s1"],[46,47,"pl-kos"],[47,54,"pl-en"],[54,55,"pl-kos"],[55,74,"pl-pds"],[55,56,"pl-c1"],[56,57,"pl-s"],[57,59,"pl-cce"],[59,60,"pl-c1"],[60,61,"pl-kos"],[61,62,"pl-c1"],[62,63,"pl-c1"],[63,64,"pl-c1"],[64,65,"pl-kos"],[65,66,"pl-kos"],[66,67,"pl-c1"],[67,68,"pl-c1"],[68,69,"pl-kos"],[69,70,"pl-c1"],[70,71,"pl-s"],[71,72,"pl-c1"],[74,75,"pl-kos"],[76,78,"pl-s"],[78,79,"pl-kos"]],[],[[4,6,"pl-k"],[7,8,"pl-kos"],[8,15,"pl-s1"],[15,16,"pl-kos"],[16,22,"pl-c1"],[22,23,"pl-kos"],[24,25,"pl-kos"]],[[8,12,"pl-s1"],[12,13,"pl-kos"],[13,17,"pl-en"],[17,18,"pl-kos"],[18,25,"pl-s1"],[25,26,"pl-kos"],[26,32,"pl-c1"],[32,33,"pl-kos"],[34,42,"pl-k"],[43,44,"pl-kos"],[44,45,"pl-s1"],[45,46,"pl-kos"],[47,48,"pl-kos"]],[[12,20,"pl-s1"],[21,22,"pl-c1"],[23,31,"pl-s1"],[31,32,"pl-kos"],[32,39,"pl-en"],[39,40,"pl-kos"],[40,41,"pl-s1"],[41,42,"pl-kos"],[43,45,"pl-s"],[45,46,"pl-kos"]],[[8,9,"pl-kos"],[9,10,"pl-kos"]],[[4,5,"pl-kos"]],[],[[4,9,"pl-k"],[10,17,"pl-s1"],[18,19,"pl-c1"],[20,28,"pl-s1"],[28,29,"pl-kos"],[29,33,"pl-en"],[33,34,"pl-kos"],[34,35,"pl-kos"]],[],[[4,7,"pl-c"]],[[0,79,"pl-c"]],[[0,6,"pl-c"]],[[0,33,"pl-c"],[7,11,"pl-k"]],[[0,7,"pl-c"]],[],[[4,10,"pl-k"],[11,12,"pl-kos"]],[[6,16,"pl-c1"],[18,25,"pl-s1"],[28,29,"pl-kos"],[29,36,"pl-s1"],[36,37,"pl-kos"],[37,42,"pl-en"],[42,43,"pl-kos"],[43,50,"pl-s1"],[50,51,"pl-kos"],[51,62,"pl-c1"],[65,74,"pl-pds"],[65,66,"pl-c1"],[66,68,"pl-cce"],[68,69,"pl-kos"],[69,70,"pl-c1"],[70,71,"pl-kos"],[71,72,"pl-kos"],[72,73,"pl-c1"],[77,83,"pl-pds"],[77,78,"pl-c1"],[78,80,"pl-cce"],[80,81,"pl-c1"],[81,82,"pl-c1"],[83,84,"pl-kos"],[85,87,"pl-c1"],[88,89,"pl-kos"],[89,90,"pl-kos"],[90,91,"pl-kos"],[91,92,"pl-kos"],[92,98,"pl-c1"],[99,100,"pl-c1"],[101,102,"pl-c1"],[105,106,"pl-c1"],[106,107,"pl-kos"]],[[6,15,"pl-c1"],[17,24,"pl-s1"],[27,28,"pl-kos"],[28,35,"pl-s1"],[35,36,"pl-kos"],[36,41,"pl-en"],[41,42,"pl-kos"],[42,53,"pl-pds"],[42,43,"pl-c1"],[43,44,"pl-kos"],[44,45,"pl-c1"],[45,46,"pl-c1"],[46,47,"pl-c1"],[47,48,"pl-c1"],[48,49,"pl-kos"],[49,50,"pl-c1"],[51,52,"pl-c1"],[53,54,"pl-kos"],[55,57,"pl-c1"],[58,59,"pl-kos"],[59,60,"pl-kos"],[60,61,"pl-kos"],[61,62,"pl-kos"],[62,68,"pl-c1"],[69,70,"pl-c1"],[71,72,"pl-c1"],[75,76,"pl-c1"],[76,77,"pl-kos"]],[[6,11,"pl-c1"],[13,20,"pl-s1"],[23,24,"pl-kos"],[24,31,"pl-s1"],[31,32,"pl-kos"],[32,39,"pl-en"],[39,40,"pl-kos"],[40,58,"pl-pds"],[40,41,"pl-c1"],[41,42,"pl-kos"],[42,43,"pl-c1"],[43,44,"pl-c1"],[44,45,"pl-c1"],[45,46,"pl-c1"],[46,47,"pl-c1"],[47,48,"pl-c1"],[48,49,"pl-c1"],[49,50,"pl-c1"],[50,52,"pl-cce"],[52,53,"pl-c1"],[53,54,"pl-c1"],[54,55,"pl-kos"],[55,56,"pl-c1"],[56,57,"pl-c1"],[58,59,"pl-kos"],[60,62,"pl-s"],[62,63,"pl-kos"],[63,64,"pl-kos"],[64,69,"pl-en"],[69,70,"pl-kos"],[70,76,"pl-pds"],[70,71,"pl-c1"],[71,73,"pl-cce"],[73,74,"pl-c1"],[74,75,"pl-c1"],[76,77,"pl-kos"],[78,80,"pl-c1"],[81,82,"pl-kos"],[82,83,"pl-kos"],[83,84,"pl-kos"],[84,85,"pl-kos"],[85,91,"pl-c1"],[94,95,"pl-c1"],[95,96,"pl-kos"]],[[6,16,"pl-c1"],[18,25,"pl-s1"],[28,34,"pl-en"],[34,35,"pl-kos"],[35,42,"pl-s1"],[42,43,"pl-kos"],[43,50,"pl-en"],[50,51,"pl-kos"],[51,56,"pl-pds"],[51,52,"pl-c1"],[52,54,"pl-cce"],[54,55,"pl-c1"],[56,57,"pl-kos"],[58,60,"pl-s"],[60,61,"pl-kos"],[61,62,"pl-kos"],[62,63,"pl-kos"],[63,69,"pl-c1"],[72,73,"pl-c1"],[73,74,"pl-kos"]],[[6,9,"pl-c1"],[11,17,"pl-en"],[17,18,"pl-kos"],[18,26,"pl-s1"],[26,27,"pl-kos"],[27,28,"pl-kos"],[28,34,"pl-c1"]],[[4,5,"pl-kos"]],[[2,3,"pl-kos"]],[],[[2,5,"pl-c"]],[[0,76,"pl-c"]],[[0,74,"pl-c"]],[[0,19,"pl-c"]],[[0,4,"pl-c"]],[[0,73,"pl-c"]],[[0,23,"pl-c"]],[[0,4,"pl-c"]],[[0,72,"pl-c"]],[[0,65,"pl-c"]],[[0,76,"pl-c"]],[[0,49,"pl-c"]],[[0,76,"pl-c"]],[[0,71,"pl-c"]],[[0,44,"pl-c"]],[[0,5,"pl-c"]],[],[[2,7,"pl-k"],[8,17,"pl-v"],[18,19,"pl-c1"],[20,21,"pl-kos"]],[],[[4,7,"pl-c"]],[[0,76,"pl-c"]],[[0,77,"pl-c"]],[[0,19,"pl-c"]],[[0,6,"pl-c"]],[[0,75,"pl-c"],[7,13,"pl-k"],[17,22,"pl-smi"]],[[0,63,"pl-c"]],[[0,6,"pl-c"]],[[0,72,"pl-c"],[7,13,"pl-k"],[17,25,"pl-smi"]],[[0,79,"pl-c"]],[[0,77,"pl-c"]],[[0,78,"pl-c"]],[[0,56,"pl-c"]],[[0,6,"pl-c"]],[[0,70,"pl-c"],[7,13,"pl-k"],[17,23,"pl-smi"]],[[0,49,"pl-c"]],[[0,6,"pl-c"]],[[0,79,"pl-c"],[7,14,"pl-k"],[17,23,"pl-smi"]],[[0,7,"pl-c"]],[],[[4,6,"pl-en"],[8,16,"pl-k"],[17,18,"pl-kos"],[18,26,"pl-s1"],[26,27,"pl-kos"],[28,36,"pl-s1"],[36,37,"pl-kos"],[38,45,"pl-s1"],[45,46,"pl-kos"],[47,48,"pl-kos"]],[[6,8,"pl-k"],[9,10,"pl-kos"],[10,11,"pl-c1"],[11,28,"pl-en"],[28,29,"pl-kos"],[29,37,"pl-s1"],[37,38,"pl-kos"],[39,47,"pl-s1"],[47,48,"pl-kos"],[48,49,"pl-kos"],[50,56,"pl-k"]],[],[[6,8,"pl-k"],[9,10,"pl-kos"],[10,11,"pl-c1"],[11,16,"pl-v"],[16,17,"pl-kos"],[17,24,"pl-en"],[24,25,"pl-kos"],[25,33,"pl-s1"],[33,34,"pl-kos"],[34,35,"pl-kos"],[36,37,"pl-kos"]],[[10,18,"pl-s1"],[19,20,"pl-c1"],[21,22,"pl-kos"],[23,31,"pl-s1"],[32,33,"pl-kos"]],[[6,7,"pl-kos"]],[],[[6,10,"pl-s1"],[10,11,"pl-kos"],[11,15,"pl-en"],[15,16,"pl-kos"],[16,24,"pl-s1"],[24,25,"pl-kos"],[26,34,"pl-k"],[35,36,"pl-kos"],[36,37,"pl-s1"],[37,38,"pl-kos"],[39,40,"pl-kos"]],[[10,15,"pl-k"],[16,23,"pl-en"],[24,25,"pl-c1"],[26,34,"pl-k"],[35,36,"pl-kos"],[36,37,"pl-kos"],[38,39,"pl-kos"]],[[12,20,"pl-s1"],[20,21,"pl-kos"],[21,25,"pl-en"],[25,26,"pl-kos"],[26,27,"pl-s1"],[27,28,"pl-kos"],[29,34,"pl-en"],[34,35,"pl-kos"],[35,36,"pl-s1"],[36,37,"pl-kos"],[38,45,"pl-s1"],[45,46,"pl-kos"],[46,47,"pl-kos"]],[[10,11,"pl-kos"]],[],[[10,22,"pl-s1"],[22,23,"pl-kos"],[23,27,"pl-en"],[27,28,"pl-kos"],[28,29,"pl-kos"],[30,37,"pl-c1"],[39,40,"pl-s1"],[40,41,"pl-kos"],[42,49,"pl-c1"],[51,58,"pl-en"],[59,60,"pl-kos"],[60,61,"pl-kos"]],[],[[10,17,"pl-en"],[17,18,"pl-kos"],[18,19,"pl-kos"]],[],[[10,11,"pl-s1"],[11,12,"pl-kos"],[12,28,"pl-en"],[28,29,"pl-kos"],[29,36,"pl-s"],[36,37,"pl-kos"],[38,45,"pl-en"],[45,46,"pl-kos"]],[[6,7,"pl-kos"],[7,8,"pl-kos"]],[],[[6,12,"pl-k"],[13,17,"pl-smi"]],[[4,5,"pl-kos"],[5,6,"pl-kos"]],[],[[4,7,"pl-c"]],[[0,74,"pl-c"]],[[0,16,"pl-c"]],[[0,6,"pl-c"]],[[0,78,"pl-c"],[7,13,"pl-k"],[17,22,"pl-smi"]],[[0,54,"pl-c"]],[[0,6,"pl-c"]],[[0,77,"pl-c"],[7,14,"pl-k"],[17,23,"pl-smi"]],[[0,7,"pl-c"]],[],[[4,7,"pl-en"],[9,17,"pl-k"],[18,19,"pl-kos"],[19,27,"pl-s1"],[27,28,"pl-kos"],[29,30,"pl-kos"]],[[6,8,"pl-k"],[9,10,"pl-kos"],[10,11,"pl-c1"],[11,28,"pl-en"],[28,29,"pl-kos"],[29,37,"pl-s1"],[37,38,"pl-kos"],[39,47,"pl-k"],[48,49,"pl-kos"],[49,50,"pl-kos"],[51,52,"pl-kos"],[52,53,"pl-kos"],[53,54,"pl-kos"],[54,55,"pl-kos"],[56,62,"pl-k"]],[],[[6,8,"pl-k"],[9,10,"pl-kos"],[10,11,"pl-c1"],[11,16,"pl-v"],[16,17,"pl-kos"],[17,24,"pl-en"],[24,25,"pl-kos"],[25,33,"pl-s1"],[33,34,"pl-kos"],[34,35,"pl-kos"],[36,37,"pl-kos"]],[[10,18,"pl-s1"],[19,20,"pl-c1"],[21,22,"pl-kos"],[23,31,"pl-s1"],[32,33,"pl-kos"]],[[6,7,"pl-kos"]],[],[[6,18,"pl-s1"],[18,19,"pl-kos"],[19,25,"pl-en"],[25,26,"pl-kos"],[26,34,"pl-k"],[35,36,"pl-kos"],[36,37,"pl-s1"],[37,38,"pl-kos"],[39,40,"pl-kos"]],[[10,16,"pl-k"],[17,25,"pl-s1"],[25,26,"pl-kos"],[26,33,"pl-en"],[33,34,"pl-kos"],[34,35,"pl-s1"],[35,36,"pl-kos"],[36,43,"pl-c1"],[43,44,"pl-kos"],[45,48,"pl-c1"],[49,50,"pl-c1"],[50,51,"pl-c1"]],[[6,7,"pl-kos"],[7,8,"pl-kos"],[8,9,"pl-kos"],[9,16,"pl-en"],[16,17,"pl-kos"],[17,25,"pl-k"],[26,27,"pl-kos"],[27,28,"pl-s1"],[28,29,"pl-kos"],[30,31,"pl-kos"]],[[10,11,"pl-s1"],[11,12,"pl-kos"],[12,19,"pl-c1"],[19,20,"pl-kos"],[20,39,"pl-en"],[39,40,"pl-kos"],[40,47,"pl-s"],[47,48,"pl-kos"],[49,50,"pl-s1"],[50,51,"pl-kos"],[51,58,"pl-c1"],[58,59,"pl-kos"]],[[6,7,"pl-kos"],[7,8,"pl-kos"]],[],[[6,18,"pl-s1"],[19,20,"pl-c1"],[21,33,"pl-s1"],[33,34,"pl-kos"],[34,40,"pl-en"],[40,41,"pl-kos"],[41,49,"pl-k"],[50,51,"pl-kos"],[51,52,"pl-s1"],[52,53,"pl-kos"],[54,55,"pl-kos"]],[[10,16,"pl-k"],[17,25,"pl-s1"],[25,26,"pl-kos"],[26,33,"pl-en"],[33,34,"pl-kos"],[34,35,"pl-s1"],[35,36,"pl-kos"],[36,43,"pl-c1"],[43,44,"pl-kos"],[45,48,"pl-c1"],[49,50,"pl-c1"],[50,51,"pl-c1"]],[[6,7,"pl-kos"],[7,8,"pl-kos"]],[],[[6,12,"pl-k"],[13,17,"pl-smi"]],[[4,5,"pl-kos"],[5,6,"pl-kos"]],[],[[4,7,"pl-c"]],[[0,80,"pl-c"]],[[0,54,"pl-c"]],[[0,6,"pl-c"]],[[0,78,"pl-c"],[7,13,"pl-k"],[17,29,"pl-smi"]],[[0,6,"pl-c"]],[[0,76,"pl-c"],[7,13,"pl-k"],[17,25,"pl-smi"]],[[0,80,"pl-c"]],[[0,76,"pl-c"]],[[0,79,"pl-c"]],[[0,65,"pl-c"]],[[0,6,"pl-c"]],[[0,74,"pl-c"],[7,13,"pl-k"],[17,23,"pl-smi"]],[[0,53,"pl-c"]],[[0,6,"pl-c"]],[[0,79,"pl-c"],[7,14,"pl-k"],[17,23,"pl-smi"]],[[0,7,"pl-c"]],[],[[4,9,"pl-en"],[11,19,"pl-k"],[20,21,"pl-kos"],[21,28,"pl-s1"],[28,29,"pl-kos"],[30,38,"pl-s1"],[38,39,"pl-kos"],[40,47,"pl-s1"],[47,48,"pl-kos"],[49,50,"pl-kos"]],[[6,8,"pl-k"],[9,10,"pl-kos"],[10,11,"pl-c1"],[11,28,"pl-en"],[28,29,"pl-kos"],[29,36,"pl-s1"],[36,37,"pl-kos"],[38,46,"pl-s1"],[46,47,"pl-kos"],[47,48,"pl-kos"],[49,55,"pl-k"]],[],[[6,8,"pl-k"],[9,10,"pl-kos"],[10,11,"pl-c1"],[11,16,"pl-v"],[16,17,"pl-kos"],[17,24,"pl-en"],[24,25,"pl-kos"],[25,32,"pl-s1"],[32,33,"pl-kos"],[33,34,"pl-kos"],[35,36,"pl-kos"]],[[10,17,"pl-s1"],[18,19,"pl-c1"],[20,21,"pl-kos"],[22,29,"pl-s1"],[30,31,"pl-kos"]],[[6,7,"pl-kos"]],[],[[6,10,"pl-s1"],[10,11,"pl-kos"],[11,15,"pl-en"],[15,16,"pl-kos"],[16,23,"pl-s1"],[23,24,"pl-kos"],[25,33,"pl-k"],[34,35,"pl-kos"],[35,36,"pl-s1"],[36,37,"pl-kos"],[38,39,"pl-kos"]],[[10,18,"pl-s1"],[18,19,"pl-kos"],[19,23,"pl-en"],[23,24,"pl-kos"],[24,25,"pl-s1"],[25,26,"pl-kos"],[27,32,"pl-en"],[32,33,"pl-kos"],[33,34,"pl-s1"],[34,35,"pl-kos"],[36,43,"pl-s1"],[43,44,"pl-kos"],[44,45,"pl-kos"]],[[6,7,"pl-kos"],[7,8,"pl-kos"]],[],[[6,12,"pl-k"],[13,17,"pl-smi"]],[[4,5,"pl-kos"],[5,6,"pl-kos"]],[],[[4,7,"pl-c"]],[[0,78,"pl-c"]],[[0,21,"pl-c"]],[[0,6,"pl-c"]],[[0,79,"pl-c"],[7,13,"pl-k"],[17,21,"pl-smi"]],[[0,60,"pl-c"]],[[0,6,"pl-c"]],[[0,73,"pl-c"],[7,14,"pl-k"],[17,24,"pl-smi"]],[[0,72,"pl-c"]],[[0,7,"pl-c"]],[],[[4,11,"pl-en"],[13,21,"pl-k"],[22,23,"pl-kos"],[23,31,"pl-s1"],[31,32,"pl-kos"],[33,34,"pl-kos"]],[[6,8,"pl-k"],[9,10,"pl-kos"],[10,18,"pl-s1"],[18,19,"pl-kos"],[19,25,"pl-c1"],[26,29,"pl-c1"],[30,39,"pl-c1"],[39,40,"pl-kos"],[41,42,"pl-kos"]],[[8,16,"pl-s1"],[17,18,"pl-c1"],[19,20,"pl-kos"],[21,29,"pl-s1"],[30,31,"pl-kos"]],[[6,7,"pl-kos"]],[],[[6,12,"pl-k"],[13,25,"pl-s1"],[25,26,"pl-kos"],[26,32,"pl-en"],[32,33,"pl-kos"],[33,41,"pl-k"],[42,43,"pl-kos"],[43,44,"pl-s1"],[44,45,"pl-kos"],[46,47,"pl-kos"]],[[10,16,"pl-k"],[17,25,"pl-s1"],[25,26,"pl-kos"],[26,33,"pl-en"],[33,34,"pl-kos"],[34,35,"pl-s1"],[35,36,"pl-kos"],[36,43,"pl-c1"],[43,44,"pl-kos"],[45,48,"pl-c1"],[49,50,"pl-c1"],[50,51,"pl-c1"]],[[6,7,"pl-kos"],[7,8,"pl-kos"],[8,9,"pl-kos"],[9,15,"pl-c1"],[16,19,"pl-c1"],[20,28,"pl-s1"],[28,29,"pl-kos"],[29,35,"pl-c1"]],[[4,5,"pl-kos"]],[],[[2,3,"pl-kos"]],[],[[2,5,"pl-c"]],[[0,68,"pl-c"]],[[0,48,"pl-c"]],[[0,5,"pl-c"]],[],[[2,4,"pl-k"],[5,6,"pl-kos"],[6,12,"pl-k"],[13,20,"pl-s1"],[21,24,"pl-c1"],[25,33,"pl-s"],[33,34,"pl-kos"],[35,36,"pl-kos"]],[[4,10,"pl-smi"],[10,11,"pl-kos"],[11,18,"pl-c1"],[19,20,"pl-c1"],[21,30,"pl-v"]],[[2,3,"pl-kos"],[4,8,"pl-k"],[9,11,"pl-k"],[12,13,"pl-kos"],[13,19,"pl-k"],[20,26,"pl-s1"],[27,30,"pl-c1"],[31,41,"pl-s"],[42,44,"pl-c1"],[45,51,"pl-s1"],[51,52,"pl-kos"],[52,55,"pl-c1"],[55,56,"pl-kos"],[57,58,"pl-kos"]],[[4,10,"pl-en"],[10,11,"pl-kos"],[11,19,"pl-k"],[20,21,"pl-kos"],[21,22,"pl-kos"],[23,24,"pl-kos"],[25,31,"pl-k"],[32,41,"pl-v"],[42,43,"pl-kos"],[43,44,"pl-kos"]],[[2,3,"pl-kos"],[4,8,"pl-k"],[9,10,"pl-kos"]],[[4,10,"pl-s1"],[10,11,"pl-kos"],[11,20,"pl-c1"],[21,22,"pl-c1"],[23,32,"pl-v"]],[[2,3,"pl-kos"]],[[0,1,"pl-kos"],[1,2,"pl-kos"],[2,6,"pl-smi"],[6,7,"pl-kos"],[7,8,"pl-kos"],[8,9,"pl-kos"]]],"colorizedLines":null,"csv":null,"csvError":null,"dependabotInfo":{"showConfigurationBanner":false,"configFilePath":null,"networkDependabotPath":"/RadLikeWhoa/Countable/network/updates","dismissConfigurationNoticePath":"/settings/dismiss-notice/dependabot_configuration_notice","configurationNoticeDismissed":false},"displayName":"Countable.js","displayUrl":"https://github.com/RadLikeWhoa/Countable/blob/master/Countable.js?raw=true","headerInfo":{"blobSize":"9.83 KB","deleteTooltip":"Fork this repository and delete the file","editTooltip":"Fork this repository and edit the file","ghDesktopPath":"https://desktop.github.com","isGitLfs":false,"onBranch":true,"shortPath":"1b8a406","siteNavLoginPath":"/login?return_to=https%3A%2F%2Fgithub.com%2FRadLikeWhoa%2FCountable%2Fblob%2Fmaster%2FCountable.js","isCSV":false,"isRichtext":false,"toc":null,"lineInfo":{"truncatedLoc":"314","truncatedSloc":"261"},"mode":"file"},"image":false,"isCodeownersFile":null,"isPlain":false,"isValidLegacyIssueTemplate":false,"issueTemplate":null,"discussionTemplate":null,"language":"JavaScript","languageID":183,"large":false,"planSupportInfo":{"repoIsFork":null,"repoOwnedByCurrentUser":null,"requestFullPath":"/RadLikeWhoa/Countable/blob/master/Countable.js","showFreeOrgGatedFeatureMessage":null,"showPlanSupportBanner":null,"upgradeDataAttributes":null,"upgradePath":null},"publishBannersInfo":{"dismissActionNoticePath":"/settings/dismiss-notice/publish_action_from_dockerfile","releasePath":"/RadLikeWhoa/Countable/releases/new?marketplace=true","showPublishActionBanner":false},"rawBlobUrl":"https://github.com/RadLikeWhoa/Countable/raw/refs/heads/master/Countable.js","renderImageOrRaw":false,"richText":null,"renderedFileInfo":null,"shortPath":null,"symbolsEnabled":true,"tabSize":8,"topBannersInfo":{"overridingGlobalFundingFile":false,"globalPreferredFundingPath":null,"showInvalidCitationWarning":false,"citationHelpUrl":"https://docs.github.com/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-citation-files","actionsOnboardingTip":null},"truncated":false,"viewable":true,"workflowRedirectUrl":null,"symbols":{"timed_out":false,"not_analyzed":false,"symbols":[{"name":"decode","kind":"function","ident_start":1265,"ident_end":1271,"extent_start":1256,"extent_end":2020,"fully_qualified_name":"decode","ident_utf16":{"start":{"line_number":45,"utf16_col":11},"end":{"line_number":45,"utf16_col":17}},"extent_utf16":{"start":{"line_number":45,"utf16_col":2},"end":{"line_number":75,"utf16_col":3}}},{"name":"validateArguments","kind":"function","ident_start":2530,"ident_end":2547,"extent_start":2521,"extent_end":3038,"fully_qualified_name":"validateArguments","ident_utf16":{"start":{"line_number":92,"utf16_col":11},"end":{"line_number":92,"utf16_col":28}},"extent_utf16":{"start":{"line_number":92,"utf16_col":2},"end":{"line_number":101,"utf16_col":3}}},{"name":"count","kind":"function","ident_start":3580,"ident_end":3585,"extent_start":3571,"extent_end":4808,"fully_qualified_name":"count","ident_utf16":{"start":{"line_number":118,"utf16_col":11},"end":{"line_number":118,"utf16_col":16}},"extent_utf16":{"start":{"line_number":118,"utf16_col":2},"end":{"line_number":153,"utf16_col":3}}},{"name":"on","kind":"function","ident_start":6518,"ident_end":6520,"extent_start":6518,"extent_end":7008,"fully_qualified_name":"on","ident_utf16":{"start":{"line_number":194,"utf16_col":4},"end":{"line_number":194,"utf16_col":6}},"extent_utf16":{"start":{"line_number":194,"utf16_col":4},"end":{"line_number":214,"utf16_col":5}}},{"name":"handler","kind":"function","ident_start":6759,"ident_end":6766,"extent_start":6759,"extent_end":6842,"fully_qualified_name":"handler","ident_utf16":{"start":{"line_number":202,"utf16_col":16},"end":{"line_number":202,"utf16_col":23}},"extent_utf16":{"start":{"line_number":202,"utf16_col":16},"end":{"line_number":204,"utf16_col":11}}},{"name":"off","kind":"function","ident_start":7350,"ident_end":7353,"extent_start":7350,"extent_end":7858,"fully_qualified_name":"off","ident_utf16":{"start":{"line_number":226,"utf16_col":4},"end":{"line_number":226,"utf16_col":7}},"extent_utf16":{"start":{"line_number":226,"utf16_col":4},"end":{"line_number":244,"utf16_col":5}}},{"name":"count","kind":"function","ident_start":8715,"ident_end":8720,"extent_start":8715,"extent_end":9016,"fully_qualified_name":"count","ident_utf16":{"start":{"line_number":264,"utf16_col":4},"end":{"line_number":264,"utf16_col":9}},"extent_utf16":{"start":{"line_number":264,"utf16_col":4},"end":{"line_number":276,"utf16_col":5}}},{"name":"enabled","kind":"function","ident_start":9443,"ident_end":9450,"extent_start":9443,"extent_end":9699,"fully_qualified_name":"enabled","ident_utf16":{"start":{"line_number":289,"utf16_col":4},"end":{"line_number":289,"utf16_col":11}},"extent_utf16":{"start":{"line_number":289,"utf16_col":4},"end":{"line_number":297,"utf16_col":5}}}]}},"copilotInfo":{"documentationUrl":"https://docs.github.com/copilot/overview-of-github-copilot/about-github-copilot-for-individuals","notices":{"codeViewPopover":{"dismissed":false,"dismissPath":"/settings/dismiss-notice/code_view_copilot_popover"}},"userAccess":{"hasSubscriptionEnded":false,"orgHasCFBAccess":false,"userHasCFIAccess":false,"userHasOrgs":false,"userIsOrgAdmin":false,"userIsOrgMember":false,"business":null,"featureRequestInfo":null}},"copilotAccessAllowed":false,"modelsAccessAllowed":false,"csrf_tokens":{"/RadLikeWhoa/Countable/branches":{"post":"tVlTAvDmCCjhVepxnvp8IAE1FAPeuDGErTUqJT4cZRwH0aeIf0ripL0ynGn64cmrWSw4gx6IeDNUlwmWZIo6yQ"},"/repos/preferences":{"post":"TUmEWlibswbvJWJukWKulIHtJYUaH6fIfv1oEidwT1HMIrOgNMKgH1Nj4hr44b1f7PFgFafKPYsBWY2aCuB8cQ"}}},"title":"Countable/Countable.js at master · RadLikeWhoa/Countable","appPayload":{"helpUrl":"https://docs.github.com","findFileWorkerPath":"/assets-cdn/worker/find-file-worker-9f8a877aa99f.js","findInFileWorkerPath":"/assets-cdn/worker/find-in-file-worker-eb3d353f90ce.js","githubDevUrl":"https://github.dev/","enabled_features":{"code_nav_ui_events":false,"overview_shared_code_dropdown_button":false,"react_blob_overlay":false,"copilot_conversational_ux_embedding_update":false,"copilot_smell_icebreaker_ux":true,"accessible_code_button":true}}}</script>
  <div data-target="react-app.reactRoot"><meta data-hydrostats="publish">   <button hidden="" data-testid="header-permalink-button" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="y,Shift+Y"></button><button hidden="" data-hotkey="y,Shift+Y"></button><div><div class="Box-sc-g0xbh4-0 hOfjFo" style="--sticky-pane-height: calc(100vh - (max(0px, 0px))); --spacing: var(--spacing-none);"><div class="Box-sc-g0xbh4-0 oDGAe"><div class="Box-sc-g0xbh4-0 kowOcT"><div tabindex="0" class="Box-sc-g0xbh4-0 gISSDQ"><div class="Box-sc-g0xbh4-0 fHCyST"><div class="Box-sc-g0xbh4-0 hPvFuC"></div><div class="Box-sc-g0xbh4-0 fFSoPl" style="--pane-width: 569px;"><div><div id="repos-file-tree" class="Box-sc-g0xbh4-0 bNhwaa"><div class="Box-sc-g0xbh4-0 hNNCwk"><div class="Box-sc-g0xbh4-0 jfIeyl"><h2 class="Box-sc-g0xbh4-0 XosP prc-Heading-Heading-6CmGO"><span role="tooltip" aria-label="Contraer árbol de archivos" id="expand-button-file-tree-button" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-se" _mstaria-label="317460" _msthash="2111"><button data-component="IconButton" type="button" data-testid="collapse-file-tree-button" aria-expanded="true" aria-controls="repos-file-tree" class="prc-Button-ButtonBase-c50BI position-relative ExpandFileTreeButton-module__expandButton--gL4is fgColor-muted prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-describedby=":r1b:-loading-announcement" aria-labelledby="expand-button-file-tree-button" data-hotkey="Control+b"><svg aria-hidden="true" focusable="false" class="octicon octicon-sidebar-expand" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m4.177 7.823 2.396-2.396A.25.25 0 0 1 7 5.604v4.792a.25.25 0 0 1-.427.177L4.177 8.177a.25.25 0 0 1 0-.354Z"></path><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25H9.5v-13Zm12.5 13a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11v13Z"></path></svg></button></span><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+b"></button></h2><h2 class="Box-sc-g0xbh4-0 kOkWgo prc-Heading-Heading-6CmGO" _msttexthash="115986" _msthash="2112">Archivos</h2></div><div class="Box-sc-g0xbh4-0 lhbroM"><div class="Box-sc-g0xbh4-0 khzwtX"><button type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-label="Rama maestra" data-testid="anchor-button" class="Box-sc-g0xbh4-0 gMOVLe prc-Button-ButtonBase-c50BI react-repos-tree-pane-ref-selector width-full ref-selector-class" data-loading="false" data-size="medium" data-variant="default" aria-describedby="branch-picker-repos-header-ref-selector-loading-announcement" id="branch-picker-repos-header-ref-selector" data-hotkey="w" _mstaria-label="206089" _msthash="2113"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x"><div class="Box-sc-g0xbh4-0 bZBlpz"><div class="Box-sc-g0xbh4-0 lhTYNA"><svg aria-hidden="true" focusable="false" class="octicon octicon-git-branch" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg></div><div class="Box-sc-g0xbh4-0 ffLUq ref-selector-button-text-container"><span class="Text__StyledText-sc-17v1xeu-0 eMMFM" _msttexthash="99905" _msthash="2114">  maestro</span></div></div></span><span data-component="trailingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></span></span></button><button hidden="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="w"></button></div><div class="Box-sc-g0xbh4-0 eTeVqd"><a sx="[object Object]" data-component="IconButton" type="button" aria-label="Agregar archivo" class="Box-sc-g0xbh4-0 fhbevO prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r1f:-loading-announcement :r1e:" href="https://github.com/RadLikeWhoa/Countable/new/master" _mstaria-label="90207" _msthash="2115"><svg aria-hidden="true" focusable="false" class="octicon octicon-plus" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg></a><span class="Tooltip__StyledTooltip-sc-e45c7z-0 jOyaRH" data-direction="s" aria-label="Add file" role="tooltip" aria-hidden="true" id=":r1e:" popover="auto" _msthidden="1" _mstaria-label="90207" _msthash="2116" _msttexthash="90207">Add file</span><button data-component="IconButton" type="button" aria-label="Buscar en este repositorio" class="Box-sc-g0xbh4-0 fCjIQM prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r1g:-loading-announcement" data-hotkey="/" _mstaria-label="471575" _msthash="2117"><svg aria-hidden="true" focusable="false" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="/"></button></div></div></div><div class="Box-sc-g0xbh4-0 qkmJR"><span class="TextInputWrapper__StyledTextInputBaseWrapper-sc-1mqhpbi-0 hLzFvi TextInputWrapper__StyledTextInputWrapper-sc-1mqhpbi-1 iHYdQq TextInput-wrapper" data-leading-visual="true" data-trailing-visual="true" aria-busy="false"><span class="TextInput-icon" id=":r1h:" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-search" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg></span><input type="text" aria-label="Ir a archivo" role="combobox" aria-controls="file-results-list" aria-expanded="false" aria-haspopup="dialog" autocorrect="off" spellcheck="false" placeholder="Ir a archivo" aria-describedby=":r1h: :r1i:" data-component="input" class="UnstyledTextInput__ToggledUnstyledTextInput-sc-14ypya-0 jkNcAv" value="" _mstplaceholder="113607" _msthash="2118" _mstaria-label="113607"><span class="TextInput-icon" id=":r1i:" aria-hidden="true"><div class="Box-sc-g0xbh4-0 dItACB"><kbd>t</kbd></div></span></span></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="t,Shift+T"></button><button hidden="" data-hotkey="t,Shift+T"></button><div class="Box-sc-g0xbh4-0 jbQqON"><div><div class="react-tree-show-tree-items"><div data-testid="repos-file-tree-container" class="Box-sc-g0xbh4-0 cOxzdh"><nav aria-label="Navegación por el árbol de archivos" _mstaria-label="374205" _msthash="1601"><span role="status" aria-live="polite" aria-atomic="true" class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 brGdpi"></span><ul role="tree" aria-label="Archivos" data-truncate-text="true" class="TreeView__UlBox-sc-4ex6b6-0 jgdSGi" _mstaria-label="59501" _msthash="1602"><li class="PRIVATE_TreeView-item" tabindex="-1" id="test-item" role="treeitem" aria-labelledby=":r4p:" aria-describedby=":r4q:" aria-level="1" aria-expanded="false" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-right" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M4.7 10c-.2 0-.4-.1-.5-.2-.3-.3-.3-.8 0-1.1L6.9 6 4.2 3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l3.3 3.2c.3.3.3.8 0 1.1L5.3 9.7c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r4p:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r4q:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><div class="PRIVATE_TreeView-directory-icon"><svg aria-hidden="true" focusable="false" class="octicon octicon-file-directory-fill" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg></div></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="78013" _msthash="1603">prueba</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id=".gitignore-item" role="treeitem" aria-labelledby=":r4s:" aria-describedby=":r4t:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r4s:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r4t:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="155376" _msthash="1604">.gitignore</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id=".jshintrc-item" role="treeitem" aria-labelledby=":r4v:" aria-describedby=":r50:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r4v:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r50:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="134017" _msthash="1605">.jshintrc</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id=".travis.yml-item" role="treeitem" aria-labelledby=":r52:" aria-describedby=":r53:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r52:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r53:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="173394" _msthash="1606">.travis.yml</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="CONTRIBUTING.md-item" role="treeitem" aria-labelledby=":r55:" aria-describedby=":r56:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r55:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r56:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="216515" _msthash="1607">CONTRIBUTING.md</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="0" id="Countable.js-item" role="treeitem" aria-labelledby=":r58:" aria-describedby=":r59:" aria-level="1" aria-current="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r58:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r59:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="193167" _msthash="1608">Countable.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="Countable.min.js-item" role="treeitem" aria-labelledby=":r5b:" aria-describedby=":r5c:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5b:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r5c:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="292448" _msthash="1609">Countable.min.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="LICENSE.md-item" role="treeitem" aria-labelledby=":r5e:" aria-describedby=":r5f:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5e:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r5f:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="117507" _msthash="1610">LICENSE.md</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="README.md-item" role="treeitem" aria-labelledby=":r5h:" aria-describedby=":r5i:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5h:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r5i:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="99970" _msthash="1611">README.md</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="index.d.ts-item" role="treeitem" aria-labelledby=":r5k:" aria-describedby=":r5l:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5k:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r5l:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="141973" _msthash="1612">index.d.ts</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="karma.conf.js-item" role="treeitem" aria-labelledby=":r5n:" aria-describedby=":r5o:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5n:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r5o:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="211354" _msthash="1613">karma.conf.js</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="package.json-item" role="treeitem" aria-labelledby=":r5q:" aria-describedby=":r5r:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5q:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r5r:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="196014" _msthash="1614">package.json</span></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="yarn.lock-item" role="treeitem" aria-labelledby=":r5t:" aria-describedby=":r5u:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1; content-visibility: auto; contain-intrinsic-size: auto 2rem;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r5t:" class="PRIVATE_TreeView-item-content"><div class="PRIVATE_VisuallyHidden" aria-hidden="true" id=":r5u:"></div><div class="PRIVATE_TreeView-item-visual" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="octicon octicon-file" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div><span class="PRIVATE_TreeView-item-content-text"><span _msttexthash="129805" _msthash="1615">yarn.lock</span></span></div></div></li></ul></nav></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 tLGNc" _mstvisible="0"><div role="slider" aria-label="Divisor de panel arrastrable" aria-valuemin="256" aria-valuemax="569" aria-valuenow="569" aria-valuetext="Pane width 569 pixels" tabindex="0" class="Box-sc-g0xbh4-0 bHLmSv" _mstaria-label="494780" _msthash="2119" _mstvisible="1"></div></div></div></div><div class="Box-sc-g0xbh4-0 iKqMNA"><div class="Box-sc-g0xbh4-0"></div><div class="Box-sc-g0xbh4-0 FxAyp"><div data-selector="repos-split-pane-content" tabindex="0" class="Box-sc-g0xbh4-0 leYMvG"><div class="Box-sc-g0xbh4-0 KMPzq"><div class="Box-sc-g0xbh4-0 hfKjHv container"><div class="px-3 pt-3 pb-0" id="StickyHeader"><div class="Box-sc-g0xbh4-0 gZWyZE"><div class="Box-sc-g0xbh4-0 dwYKDk"><div class="Box-sc-g0xbh4-0 iDtIiT"><div class="Box-sc-g0xbh4-0 cEytCf"><nav data-testid="breadcrumbs" aria-labelledby="repos-header-breadcrumb--wide-heading" id="repos-header-breadcrumb--wide" class="Box-sc-g0xbh4-0 fzFXnm"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" id="repos-header-breadcrumb--wide-heading" _msttexthash="154271" _msthash="2120">Pan rallado</h2><ol class="Box-sc-g0xbh4-0 iMnkmv"><li class="Box-sc-g0xbh4-0 ghzDag"><a class="Box-sc-g0xbh4-0 kHuKdh prc-Link-Link-85e08" sx="[object Object]" data-testid="breadcrumbs-repo-link" href="https://github.com/RadLikeWhoa/Countable/tree/master" _msttexthash="111384" _msthash="2121">Contable</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 ghzDag"><span class="Text__StyledText-sc-17v1xeu-0 HlHVj" aria-hidden="true">/</span><h1 class="Box-sc-g0xbh4-0 jGhzSQ prc-Heading-Heading-6CmGO" tabindex="-1" id="file-name-id-wide" _msttexthash="193167" _msthash="2122">Countable.js</h1></div><button data-component="IconButton" type="button" class="prc-Button-ButtonBase-c50BI ml-2 prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r2u:-loading-announcement" aria-labelledby=":r2s:"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button><span class="Tooltip__StyledTooltip-sc-e45c7z-0 jOyaRH CopyToClipboardButton-module__tooltip--Dq1IB" data-direction="nw" aria-label="Copy path" aria-hidden="true" id=":r2s:" popover="auto" _msthidden="1" _mstaria-label="116155" _msthash="2123" _msttexthash="116155">Copy path</span></div></div><div class="react-code-view-header-element--wide"><div class="Box-sc-g0xbh4-0 faNtbn"><div class="d-flex gap-2"> <button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="l,Shift+L"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Mod+Alt+g"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" class="Box-sc-g0xbh4-0 dwNhzn prc-Button-ButtonBase-c50BI" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r2v:-loading-announcement" data-hotkey="b,Shift+B,Control+/ Control+b" _msthidden="1"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-" _msthidden="1"><span data-component="text" class="prc-Button-Label-pTQ3x" _msttexthash="57200" _msthidden="1" _msthash="2124">Blame</span></span></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="b,Shift+B,Control+/ Control+b"></button><button data-component="IconButton" type="button" aria-label="Más acciones de archivo" title="More file actions" data-testid="more-file-actions-button-nav-menu-wide" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 fGwBZA prc-Button-ButtonBase-c50BI js-blob-dropdown-click prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r30:-loading-announcement" id=":r30:" _mstaria-label="289744" _msthash="2125"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div><div class="react-code-view-header-element--narrow" _msthidden="2"><div class="Box-sc-g0xbh4-0 faNtbn" _msthidden="2"><div class="d-flex gap-2" _msthidden="2"> <button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="l,Shift+L"></button><button hidden="" data-hotkey="l,Shift+L"></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Mod+Alt+g"></button><button hidden="" data-hotkey="Mod+Alt+g"></button><button type="button" class="Box-sc-g0xbh4-0 dwNhzn prc-Button-ButtonBase-c50BI" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r33:-loading-announcement" data-hotkey="b,Shift+B,Control+/ Control+b" _msthidden="1"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-" _msthidden="1"><span data-component="text" class="prc-Button-Label-pTQ3x" _msttexthash="57200" _msthidden="1" _msthash="2126">Blame</span></span></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="b,Shift+B,Control+/ Control+b"></button><button data-component="IconButton" type="button" aria-label="More file actions" title="More file actions" data-testid="more-file-actions-button-nav-menu-narrow" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 fGwBZA prc-Button-ButtonBase-c50BI js-blob-dropdown-click prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="default" aria-describedby=":r34:-loading-announcement" id=":r34:" _msthidden="A" _mstaria-label="289744" _msthash="2127"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button> </div></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 dJxjrT react-code-view-bottom-padding"> <div class="Box-sc-g0xbh4-0 eFxKDQ"></div>   </div><div class="Box-sc-g0xbh4-0 dJxjrT">   <button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="r,Shift+R"></button><button hidden="" data-hotkey="r,Shift+R"></button><div class="d-flex flex-column border rounded-2 mb-3 pl-1"><div class="Box-sc-g0xbh4-0 dzCJzi"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" _msttexthash="434668" _msthash="2128">Última confirmación</h2><div data-testid="latest-commit" class="Box-sc-g0xbh4-0 ePWWCk"><div class="Box-sc-g0xbh4-0 dpBUfI"><div data-testid="author-avatar" class="Box-sc-g0xbh4-0 hKWjvQ"><a class="prc-Link-Link-85e08" href="https://github.com/timgates42" data-testid="avatar-icon-link" data-hovercard-url="/users/timgates42/hovercard"><img data-component="Avatar" class="Box-sc-g0xbh4-0 cvdqJW prc-Avatar-Avatar-ZRS-m" alt="timgates42" width="20" height="20" src="./Countable_Countable_files/47873678" data-testid="github-avatar" aria-label="timgates42" style="--avatarSize-regular: 20px;" _mstalt="138125" _msthash="2181" _mstaria-label="138125"></a><a class="Box-sc-g0xbh4-0 dkaFxu prc-Link-Link-85e08" data-muted="true" href="https://github.com/RadLikeWhoa/Countable/commits?author=timgates42" aria-label="Confirmaciones por timgates42" data-hovercard-url="/users/timgates42/hovercard" _mstaria-label="392366" _msthash="2182" _msttexthash="138125">timgates42</a></div><span class=""></span></div><div class="Box-sc-g0xbh4-0 erEOeb d-none d-sm-flex"><div class="Truncate flex-items-center f5"><span class="Text__StyledText-sc-17v1xeu-0 hWqAbU Truncate-text" data-testid="latest-commit-html"><a href="https://github.com/RadLikeWhoa/Countable/commit/5692c38737e0aad79e3b8350ff4cb32cfca4a647" class="Link--secondary" data-pjax="true" data-hovercard-url="/RadLikeWhoa/Countable/commit/5692c38737e0aad79e3b8350ff4cb32cfca4a647/hovercard" _msttexthash="2300636" _msthash="2183">docs: Corregir un error tipográfico simple, vaild -&gt; válido</a></span></div><button data-component="IconButton" type="button" aria-label="Detalles de la confirmación abierta" aria-pressed="false" aria-expanded="false" data-testid="latest-commit-details-toggle" class="Box-sc-g0xbh4-0 hdOVEE prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r61:-loading-announcement" _mstaria-label="352833" _msthash="2184"><svg aria-hidden="true" focusable="false" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg></button></div><span class="d-flex d-sm-none fgColor-muted f6" _msthidden="1"><relative-time class="sc-aXZVg" tense="past" datetime="2020-09-18T12:19:45.000Z" title="Sep 18, 2020, 7:19 AM GMT-5" _msttexthash="89323" _msthidden="1" _msthash="2185"><template shadowrootmode="open">5 years ago</template>Sep 18, 2020</relative-time></span></div><div class="d-flex flex-shrink-0 gap-2"><div data-testid="latest-commit-details" class="d-none d-sm-flex flex-items-center"><span class="d-flex flex-nowrap fgColor-muted f6"><a class="Link--secondary prc-Link-Link-85e08" aria-label="Confirmación 5692c38" data-hovercard-url="/RadLikeWhoa/Countable/commit/5692c38737e0aad79e3b8350ff4cb32cfca4a647/hovercard" href="https://github.com/RadLikeWhoa/Countable/commit/5692c38737e0aad79e3b8350ff4cb32cfca4a647" _mstaria-label="165620" _msthash="2179" _msttexthash="50609">5692C38</a>&nbsp;·&nbsp;<relative-time class="sc-aXZVg" tense="past" datetime="2020-09-18T12:19:45.000Z" title="Sep 18, 2020, 7:19 AM GMT-5" _msttexthash="368862" _msthash="2180"><template shadowrootmode="open">5 years ago</template>18 de septiembre de 2020</relative-time></span></div><div class="d-flex gap-2"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" _msttexthash="115063" _msthash="2129">Historia</h2><a href="https://github.com/RadLikeWhoa/Countable/commits/master/Countable.js" class="prc-Button-ButtonBase-c50BI d-none d-lg-flex LinkButton-module__code-view-link-button--xvCGA flex-items-center fgColor-default" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":r37:-loading-announcement"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x"><span class="fgColor-default" _msttexthash="115063" _msthash="2130">Historia</span></span></span></a><div class="d-sm-none"><button data-component="IconButton" type="button" aria-label="Open commit details" aria-pressed="false" aria-expanded="false" data-testid="latest-commit-details-toggle" class="Box-sc-g0xbh4-0 hdOVEE prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r62:-loading-announcement" _msthidden="A" _mstaria-label="352833" _msthash="2178"><svg aria-hidden="true" focusable="false" class="octicon octicon-ellipsis" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg></button></div><div class="d-flex d-lg-none" _msthidden="1"><span role="tooltip" aria-label="History" id="history-icon-button-tooltip" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-n" _msthidden="A" _mstaria-label="100113" _msthash="2131"><a href="https://github.com/RadLikeWhoa/Countable/commits/master/Countable.js" class="prc-Button-ButtonBase-c50BI LinkButton-module__code-view-link-button--xvCGA flex-items-center fgColor-default" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":r39:-loading-announcement history-icon-button-tooltip"><span data-component="buttonContent" data-align="center" class="prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-history" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg></span></span></a></span></div></div></div></div></div><div class="Box-sc-g0xbh4-0 ldRxiI"><div class="Box-sc-g0xbh4-0 efRoCL container"><div class="Box-sc-g0xbh4-0 gNAmSV react-code-size-details-banner" _msthidden="2"><div class="Box-sc-g0xbh4-0 jNEwzY react-code-size-details-banner" _msthidden="1"><div class="Box-sc-g0xbh4-0 bsDwxw text-mono" _msthidden="1"><div title="9.83 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 eAtkQz" _msthidden="1"><span _msttexthash="412386" _msthidden="1" _msthash="2132">314 lines (261 loc) · 9.83 KB</span></div></div></div><div class="react-code-size-details-banner" _msthidden="1"><button type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 kXyYCF prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":r3a:-loading-announcement" id=":r3a:" _msthidden="1" style="--button-color: fg.default;"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-" _msthidden="1"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x" _msttexthash="842595" _msthidden="1" _msthash="2133">Code 55% faster with GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 jdLMhu react-blob-view-header-sticky" id="repos-sticky-header"><div class="Box-sc-g0xbh4-0 tOISc"><div class="react-blob-sticky-header" _msthidden="4"><div class="Box-sc-g0xbh4-0 cWyMqi" _mstvisible="0"><div class="Box-sc-g0xbh4-0 lzKZY" _mstvisible="1"><div class="Box-sc-g0xbh4-0 fHind" _mstvisible="2"><nav data-testid="breadcrumbs" aria-labelledby="sticky-breadcrumb-heading" id="sticky-breadcrumb" class="Box-sc-g0xbh4-0 fzFXnm" _mstvisible="3"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" id="sticky-breadcrumb-heading" _msttexthash="154271" _msthash="2134" _mstvisible="4">Pan rallado</h2><ol class="Box-sc-g0xbh4-0 iMnkmv" _mstvisible="4"><li class="Box-sc-g0xbh4-0 ghzDag" _mstvisible="5"><a class="Box-sc-g0xbh4-0 kHuKdh prc-Link-Link-85e08" sx="[object Object]" data-testid="breadcrumbs-repo-link" href="https://github.com/RadLikeWhoa/Countable/tree/master" _msttexthash="111384" _msthash="2135" _mstvisible="6">Contable</a></li></ol></nav><div data-testid="breadcrumbs-filename" class="Box-sc-g0xbh4-0 ghzDag" _mstvisible="3"><span class="Text__StyledText-sc-17v1xeu-0 lauzFl" aria-hidden="true" _mstvisible="4">/</span><h1 class="Box-sc-g0xbh4-0 dnZoUW prc-Heading-Heading-6CmGO" tabindex="-1" id="sticky-file-name-id" _msttexthash="193167" _msthash="2136" _mstvisible="4">Countable.js</h1></div></div><button type="button" class="Box-sc-g0xbh4-0 jRZWlf prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":r3c:-loading-announcement" _mstvisible="2" style="--button-color: fg.default;"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-" _mstvisible="3"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB" _mstvisible="4"><svg aria-hidden="true" focusable="false" class="octicon octicon-arrow-up" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;" _mstVisible="5"><path d="M3.47 7.78a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0l4.25 4.25a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018L9 4.81v7.44a.75.75 0 0 1-1.5 0V4.81L4.53 7.78a.75.75 0 0 1-1.06 0Z" _mstVisible="6"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x" _msttexthash="73905" _msthash="2137" _mstvisible="4">Arriba</span></span></button></div></div></div><div class="Box-sc-g0xbh4-0 lhbAAw"><h2 class="sr-only ScreenReaderHeading-module__userSelectNone--vW4Cq prc-Heading-Heading-6CmGO" data-testid="screen-reader-heading" _msttexthash="801177" _msthash="2138">Metadatos y controles de archivo</h2><div class="Box-sc-g0xbh4-0 iNMjfP"><ul aria-label="Vista de archivos" class="SegmentedControl__SegmentedControlList-sc-1rzig82-0 lawgDG" data-size="small" _mstaria-label="115037" _msthash="2139"><li class="Box-sc-g0xbh4-0 fefCSX" data-selected="true"><button aria-current="true" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 dbGjOi" type="button" data-hotkey="Control+/ Control+c"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text" data-text="Code" _msttexthash="88764" _msthash="2140">Código</div></span></button></li><li class="Box-sc-g0xbh4-0 idgUkN"><button aria-current="false" class="SegmentedControlButton__SegmentedControlButtonStyled-sc-8lkgxl-0 bHmvop" type="button" data-hotkey="b,Shift+B,Control+/ Control+b"><span class="segmentedControl-content"><div class="Box-sc-g0xbh4-0 segmentedControl-text" data-text="Blame" _msttexthash="59332" _msthash="2141">Culpa</div></span></button></li></ul><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+/ Control+c"></button><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="b,Shift+B,Control+/ Control+b"></button><div class="Box-sc-g0xbh4-0 jNEwzY react-code-size-details-in-header"><div class="Box-sc-g0xbh4-0 bsDwxw text-mono"><div title="9.83 KB" data-testid="blob-size" class="Truncate__StyledTruncate-sc-23o1d2-0 eAtkQz"><span _msttexthash="464529" _msthash="2142">314 líneas (261 loc) · 9.83 KB</span></div></div></div><div class="react-code-size-details-in-header"><button type="button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 kXyYCF prc-Button-ButtonBase-c50BI" data-loading="false" data-size="small" data-variant="invisible" aria-describedby=":r3d:-loading-announcement" id=":r3d:" style="--button-color: fg.default;"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="leadingVisual" class="prc-Button-Visual-2epfX prc-Button-VisualWrap-Db-eB"><svg aria-hidden="true" focusable="false" class="octicon octicon-copilot" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"></path><path d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"></path></svg></span><span data-component="text" class="prc-Button-Label-pTQ3x" _msttexthash="1338025" _msthash="2143">Codifica un 55 % más rápido con GitHub Copilot</span></span></button></div></div><div class="Box-sc-g0xbh4-0 kcLCKF"><button hidden="" data-testid="" data-hotkey="Control+Shift+&gt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&gt;"></button><button hidden="" data-testid="" data-hotkey="Control+Shift+&lt;" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-hotkey="Control+Shift+&lt;"></button><div class="Box-sc-g0xbh4-0 kVWtTz react-blob-header-edit-and-raw-actions"><div class="Box-sc-g0xbh4-0 prc-ButtonGroup-ButtonGroup-vcMeG"><div><a href="https://github.com/RadLikeWhoa/Countable/raw/refs/heads/master/Countable.js" data-testid="raw-button" class="Box-sc-g0xbh4-0 gWqxTd prc-Button-ButtonBase-c50BI" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r3f:-loading-announcement" data-hotkey="Control+/ Control+r"><span data-component="buttonContent" class="Box-sc-g0xbh4-0 gUkoLg prc-Button-ButtonContent-HKbr-"><span data-component="text" class="prc-Button-Label-pTQ3x" _msttexthash="60515" _msthash="2144">Crudo</span></span></a></div><div><button data-component="IconButton" type="button" aria-label="Copiar contenido sin procesar" data-testid="copy-raw-button" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r3g:-loading-announcement" data-hotkey="Control+Shift+C" _mstaria-label="267163" _msthash="2145"><svg aria-hidden="true" focusable="false" class="octicon octicon-copy" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg></button></div><div><span role="tooltip" aria-label="Descargar archivo sin procesar" id=":r3h:" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-n" _mstaria-label="287469" _msthash="2146"><button data-component="IconButton" type="button" aria-label="Descargar contenido en bruto" data-testid="download-raw-button" class="Box-sc-g0xbh4-0 ivobqY prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r3i:-loading-announcement" data-hotkey="Control+Shift+S" _mstaria-label="390832" _msthash="2147"><svg aria-hidden="true" focusable="false" class="octicon octicon-download" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a.75.75 0 0 1 1.5 0v2.5c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25v-2.5a.75.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"></path><path d="M7.25 7.689V2a.75.75 0 0 1 1.5 0v5.689l1.97-1.969a.749.749 0 1 1 1.06 1.06l-3.25 3.25a.749.749 0 0 1-1.06 0L4.22 6.78a.749.749 0 1 1 1.06-1.06l1.97 1.969Z"></path></svg></button></span></div></div><button hidden="" data-testid="raw-button-shortcut" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+/ Control+r"></button><button hidden="" data-testid="copy-raw-button-shortcut" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+Shift+C"></button><button hidden="" data-testid="download-raw-button-shortcut" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+Shift+S"></button><a class="js-github-dev-shortcut d-none prc-Link-Link-85e08" href="https://github.dev/" data-hotkey="., Control+Shift+/"></a><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="., Control+Shift+/"></button><a class="js-github-dev-new-tab-shortcut d-none prc-Link-Link-85e08" href="https://github.dev/" target="_blank" data-hotkey="Shift+.,Shift+&gt;,&gt;"></a><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Shift+.,Shift+&gt;,&gt;"></button><div class="Box-sc-g0xbh4-0 prc-ButtonGroup-ButtonGroup-vcMeG"><div><span role="tooltip" aria-label="Bifurca este repositorio y edita el archivo" id=":r3j:" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-nw" _mstaria-label="1002443" _msthash="2148"><a sx="[object Object]" data-component="IconButton" type="button" aria-label="Editar archivo" data-testid="edit-button" class="Box-sc-g0xbh4-0 kilKoS prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r3k:-loading-announcement" href="https://github.com/RadLikeWhoa/Countable/edit/master/Countable.js" data-hotkey="e,Shift+E" _mstaria-label="111644" _msthash="2149"><svg aria-hidden="true" focusable="false" class="octicon octicon-pencil" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg></a></span></div><div><button data-component="IconButton" type="button" aria-label="Más opciones de edición" data-testid="more-edit-button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="default" aria-describedby=":r3l:-loading-announcement" id=":r3l:" _mstaria-label="296478" _msthash="2150"><svg aria-hidden="true" focusable="false" class="octicon octicon-triangle-down" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg></button></div></div><button hidden="" data-testid="" data-hotkey="e,Shift+E" data-hotkey-scope="read-only-cursor-text-area"></button></div><span role="tooltip" aria-label="Cerrar panel de símbolos" id=":r3o:" class="Tooltip__TooltipBase-sc-17tf59c-0 hWlpPn tooltipped-nw" _mstaria-label="355004" _msthash="2151"><button data-component="IconButton" type="button" aria-label="Símbolos" aria-pressed="true" aria-expanded="true" aria-controls="symbols-pane" data-testid="symbols-button" class="Box-sc-g0xbh4-0 heuRGy prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby="symbols-button-loading-announcement" id="symbols-button" data-hotkey="Control+i" _mstaria-label="97786" _msthash="2152"><svg aria-hidden="true" focusable="false" class="octicon octicon-code-square" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25Zm7.47 3.97a.75.75 0 0 1 1.06 0l2 2a.75.75 0 0 1 0 1.06l-2 2a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L10.69 8 9.22 6.53a.75.75 0 0 1 0-1.06ZM6.78 6.53 5.31 8l1.47 1.47a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-2-2a.75.75 0 0 1 0-1.06l2-2a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg></button></span><div class="react-blob-header-edit-and-raw-actions-combined" _msthidden="1"><button data-component="IconButton" type="button" aria-label="Edit and raw actions" title="More file actions" data-testid="more-file-actions-button" aria-haspopup="true" aria-expanded="false" tabindex="0" class="Box-sc-g0xbh4-0 ffkqe prc-Button-ButtonBase-c50BI js-blob-dropdown-click prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="small" data-variant="invisible" aria-describedby=":r3q:-loading-announcement" id=":r3q:" _msthidden="A" _mstaria-label="353093" _msthash="2153"><svg aria-hidden="true" focusable="false" class="octicon octicon-kebab-horizontal" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path></svg></button></div></div></div></div><div><div class="Box-sc-g0xbh4-0 wsqgX"><div class="Box-sc-g0xbh4-0 kGicmb"><div class="Box-sc-g0xbh4-0 ppLhD react-line-numbers"><div data-line-number="195" class="react-line-number react-code-text" _msttexthash="16588" _msthash="2620" style="padding-right: 16px;">195</div></div><div class="react-code-lines"><div class="react-code-text react-code-line-contents" style="min-height: auto;"><div><div class="react-file-line html-div" data-testid="code-cell" data-line-number="195" style="position: relative;">    <span class="pl-en" _msttexthash="20631" _msthash="2621">en</span><font _mstmutation="1" _msttexthash="5278" _msthash="2622">: </font><span class="pl-k" _msttexthash="118703" _msthash="2623">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2624">Elementos</span><span class="pl-kos" _msttexthash="4004" _msthash="2625">,</span> <span class="pl-s1" _msttexthash="108212" _msthash="2626">Callback</span><span class="pl-kos" _msttexthash="4004" _msthash="2627">,</span> <span class="pl-s1" _msttexthash="115102" _msthash="2628">Opciones</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div></div></div></div></div></div><div class="Box-sc-g0xbh4-0 hGyMdv"><section aria-labelledby="file-name-id-wide file-name-id-mobile" class="Box-sc-g0xbh4-0 dceWRL"><div class="Box-sc-g0xbh4-0 dGXHv"><div id="highlighted-line-menu-positioner" class="position-relative"><div id="copilot-button-positioner" class="Box-sc-g0xbh4-0 bpDFns"><div class="Box-sc-g0xbh4-0 iJOeCH"><div class="Box-sc-g0xbh4-0 eJSJhL"><div class="Box-sc-g0xbh4-0 fzlLVB"><div aria-hidden="true" data-testid="navigation-cursor" class="Box-sc-g0xbh4-0 code-navigation-cursor" style="top: 0px; left: 92px;"> </div><button hidden="" data-testid="NavigationCursorEnter" data-hotkey="Control+Enter" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightedLine" data-hotkey="Shift+J" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorSetHighlightAndExpandMenu" data-hotkey="Alt+Shift+C,Alt+Shift+Ç" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageDown" data-hotkey="PageDown" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="NavigationCursorPageUp" data-hotkey="PageUp" data-hotkey-scope="read-only-cursor-text-area"></button><button hidden="" data-testid="" data-hotkey="/" data-hotkey-scope="read-only-cursor-text-area"></button></div></div><textarea id="read-only-cursor-text-area" data-testid="read-only-cursor-text-area" aria-label="Contenido del archivo" aria-readonly="true" inputmode="none" tabindex="0" aria-multiline="true" aria-haspopup="false" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false" spellcheck="false" autocorrect="off" autocapitalize="off" autocomplete="off" data-ms-editor="false" class="react-blob-textarea react-blob-print-hide" _mstaria-label="185354" _msthash="2154" style="resize: none; margin-top: -2px; padding-left: 92px; padding-right: 70px; width: 100%; background-color: unset; box-sizing: border-box; color: transparent; position: absolute; border: none; tab-size: 8; outline: none; overflow: auto hidden; height: 6300px; font-size: 12px; line-height: 20px; overflow-wrap: normal; overscroll-behavior-x: none; white-space: pre; z-index: 1;">/**
 * Countable is a script to allow for live paragraph-, word- and character-
 * counting on an HTML element.
 *
 * @author   Sacha Schmid (&lt;https://github.com/RadLikeWhoa&gt;)
 * @version  3.0.1
 * @license  MIT
 * @see      &lt;http://radlikewhoa.github.io/Countable/&gt;
 */

/**
 * Note: For the purpose of this internal documentation, arguments of the type
 * {Nodes} are to be interpreted as either {NodeList} or {Element}.
 */

;(function (global) {
  'use strict'

  /**
   * @private
   *
   * `liveElements` holds all elements that have the live-counting
   * functionality bound to them.
   */

  let liveElements = []
  const each = Array.prototype.forEach

  /**
   * `ucs2decode` function from the punycode.js library.
   *
   * Creates an array containing the decimal code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally, this
   * function will convert a pair of surrogate halves (each of which UCS-2
   * exposes as separate characters) into a single code point, matching
   * UTF-16.
   *
   * @see     &lt;http://goo.gl/8M09r&gt;
   * @see     &lt;http://goo.gl/u4UUC&gt;
   *
   * @param   {String}  string   The Unicode input string (UCS-2).
   *
   * @return  {Array}   The new array of code points.
   */

  function decode (string) {
    const output = []
  	let counter = 0
  	const length = string.length

  	while (counter &lt; length) {
  		const value = string.charCodeAt(counter++)

  		if (value &gt;= 0xD800 &amp;&amp; value &lt;= 0xDBFF &amp;&amp; counter &lt; length) {

  			// It's a high surrogate, and there is a next character.

  			const extra = string.charCodeAt(counter++)

  			if ((extra &amp; 0xFC00) == 0xDC00) { // Low surrogate.
  				output.push(((value &amp; 0x3FF) &lt;&lt; 10) + (extra &amp; 0x3FF) + 0x10000)
  			} else {

  				// It's an unmatched surrogate; only append this code unit, in case the
  				// next code unit is the high surrogate of a surrogate pair.

  				output.push(value)
  				counter--
  			}
  		} else {
  			output.push(value)
  		}
  	}

  	return output
  }

  /**
   * `validateArguments` validates the arguments given to each function call.
   * Errors are logged to the console as warnings, but Countable fails
   * silently.
   *
   * @private
   *
   * @param   {Nodes|String}  targets   A (collection of) element(s) or a single
	 *                                    string to validate.
   *
   * @param   {Function}      callback  The callback function to validate.
   *
   * @return  {Boolean}       Returns whether all arguments are valid.
   */

  function validateArguments (targets, callback) {
    const nodes = Object.prototype.toString.call(targets)
    const targetsValid = typeof targets === 'string' || ((nodes === '[object NodeList]' || nodes === '[object HTMLCollection]') || targets.nodeType === 1)
    const callbackValid = typeof callback === 'function'

    if (!targetsValid) console.error('Countable: Not a valid target')
    if (!callbackValid) console.error('Countable: Not a valid callback function')

    return targetsValid &amp;&amp; callbackValid
  }

  /**
   * `count` trims an element's value, optionally strips HTML tags and counts
   * paragraphs, sentences, words, characters and characters plus spaces.
   *
   * @private
   *
   * @param   {Node|String}  target   The target for the count.
   *
   * @param   {Object}   	   options  The options to use for the counting.
   *
   * @return  {Object}       The object containing the number of paragraphs,
   *                         sentences, words, characters and characters
	 *                         plus spaces.
   */

  function count (target, options) {
    let original = '' + (typeof target === 'string' ? target : ('value' in target ? target.value : target.textContent))
    options = options || {}

    /**
     * The initial implementation to allow for HTML tags stripping was created
     * @craniumslows while the current one was created by @Rob--W.
     *
     * @see &lt;http://goo.gl/Exmlr&gt;
     * @see &lt;http://goo.gl/gFQQh&gt;
     */

    if (options.stripTags) original = original.replace(/&lt;\/?[a-z][^&gt;]*&gt;/gi, '')

    if (options.ignore) {
        each.call(options.ignore, function (i) {
            original = original.replace(i, '')
        })
    }

    const trimmed = original.trim()

    /**
     * Most of the performance improvements are based on the works of @epmatsw.
     *
     * @see &lt;http://goo.gl/SWOLB&gt;
     */

    return {
      paragraphs: trimmed ? (trimmed.match(options.hardReturns ? /\n{2,}/g : /\n+/g) || []).length + 1 : 0,
      sentences: trimmed ? (trimmed.match(/[.?!…]+./g) || []).length + 1 : 0,
      words: trimmed ? (trimmed.replace(/['";:,.?¿\-!¡]+/g, '').match(/\S+/g) || []).length : 0,
      characters: trimmed ? decode(trimmed.replace(/\s/g, '')).length : 0,
      all: decode(original).length
    }
  }

  /**
   * This is the main object that will later be exposed to other scripts. It
   * holds all the public methods that can be used to enable the Countable
   * functionality.
   *
   * Some methods accept an optional options parameter. This includes the
   * following options.
   *
   * {Boolean}      hardReturns  Use two returns to seperate a paragraph
   *                             instead of one. (default: false)
   * {Boolean}      stripTags    Strip HTML tags before counting the values.
   *                             (default: false)
   * {Array&lt;Char&gt;}  ignore       A list of characters that should be removed
   *                             ignored when calculating the counters.
   *                             (default: )
   */

  const Countable = {

    /**
     * The `on` method binds the counting handler to all given elements. The
     * event is either `oninput` or `onkeydown`, based on the capabilities of
     * the browser.
     *
     * @param   {Nodes}     elements   All elements that should receive the
     *                                 Countable functionality.
     *
     * @param   {Function}  callback   The callback to fire whenever the
     *                                 element's value changes. The callback is
     *                                 called with the relevant element bound
     *                                 to `this` and the counted values as the
     *                                 single parameter.
     *
     * @param   {Object}    [options]  An object to modify Countable's
     *                                 behaviour.
     *
     * @return  {Object}    Returns the Countable object to allow for chaining.
     */

    on: function (elements, callback, options) {
      if (!validateArguments(elements, callback)) return

      if (!Array.isArray(elements)) {
          elements = [ elements ]
      }

      each.call(elements, function (e) {
          const handler = function () {
            callback.call(e, count(e, options))
          }

          liveElements.push({ element: e, handler: handler })

          handler()

          e.addEventListener('input', handler)
      })

      return this
    },

    /**
     * The `off` method removes the Countable functionality from all given
     * elements.
     *
     * @param   {Nodes}   elements  All elements whose Countable functionality
     *                              should be unbound.
     *
     * @return  {Object}  Returns the Countable object to allow for chaining.
     */

    off: function (elements) {
      if (!validateArguments(elements, function () {})) return

      if (!Array.isArray(elements)) {
          elements = [ elements ]
      }

      liveElements.filter(function (e) {
          return elements.indexOf(e.element) !== -1
      }).forEach(function (e) {
          e.element.removeEventListener('input', e.handler)
      })

      liveElements = liveElements.filter(function (e) {
          return elements.indexOf(e.element) === -1
      })

      return this
    },

    /**
     * The `count` method works mostly like the `live` method, but no events are
     * bound, the functionality is only executed once.
     *
     * @param   {Nodes|String}  targets   All elements that should be counted.
     *
     * @param   {Function}      callback   The callback to fire whenever the
     *                                     element's value changes. The callback
		 *                                     is called with the relevant element
		 *                                     bound to `this` and the counted values
		 *                                     as the single parameter.
     *
     * @param   {Object}        [options]  An object to modify Countable's
     *                                     behaviour.
     *
     * @return  {Object}    Returns the Countable object to allow for chaining.
     */

    count: function (targets, callback, options) {
      if (!validateArguments(targets, callback)) return

      if (!Array.isArray(targets)) {
          targets = [ targets ]
      }

      each.call(targets, function (e) {
          callback.call(e, count(e, options))
      })

      return this
    },

    /**
     * The `enabled` method checks if the live-counting functionality is bound
     * to an element.
     *
     * @param   {Node}     element  All elements that should be checked for the
     *                              Countable functionality.
     *
     * @return  {Boolean}  A boolean value representing whether Countable
     *                     functionality is bound to all given elements.
     */

    enabled: function (elements) {
      if (elements.length === undefined) {
        elements = [ elements ]
      }

      return liveElements.filter(function (e) {
          return elements.indexOf(e.element) !== -1
      }).length === elements.length
    }

  }

  /**
   * Expose Countable depending on the module system used across the
   * application. (Node / CommonJS, AMD, global)
   */

  if (typeof exports === 'object') {
    module.exports = Countable
  } else if (typeof define === 'function' &amp;&amp; define.amd) {
    define(function () { return Countable })
  } else {
    global.Countable = Countable
  }
}(this));</textarea><button hidden="" data-testid="" data-hotkey="Alt+F1,Control+Alt+˙,Control+Alt+h" data-hotkey-scope="read-only-cursor-text-area"></button><div class="Box-sc-g0xbh4-0 kHHiZS"><div class="Box-sc-g0xbh4-0 jqUoVd react-code-line-container" tabindex="0"><div class="Box-sc-g0xbh4-0 duxigO react-code-file-contents" role="presentation" aria-hidden="true" data-tab-size="8" data-testid="code-lines-container" data-paste-markdown-skip="true" data-hpc="true" style="height: 6280px;"><div class="react-line-numbers" style="pointer-events: auto; height: 6280px; position: relative; z-index: 2;"><div data-line-number="1" class="react-line-number react-code-text" _msttexthash="4459" _msthash="1616" style="padding-right: 16px;">1</div><div data-line-number="2" class="react-line-number react-code-text virtual" _msttexthash="4550" _msthash="1617" style="padding-right: 16px; transform: translateY(20px);">2</div><div data-line-number="3" class="react-line-number react-code-text virtual" _msttexthash="4641" _msthash="1618" style="padding-right: 16px; transform: translateY(40px);">3</div><div data-line-number="4" class="react-line-number react-code-text virtual" _msttexthash="4732" _msthash="1619" style="padding-right: 16px; transform: translateY(60px);">4</div><div data-line-number="5" class="react-line-number react-code-text virtual" _msttexthash="4823" _msthash="1620" style="padding-right: 16px; transform: translateY(80px);">5</div><div data-line-number="6" class="react-line-number react-code-text virtual" _msttexthash="4914" _msthash="1621" style="padding-right: 16px; transform: translateY(100px);">6</div><div data-line-number="7" class="react-line-number react-code-text virtual" _msttexthash="5005" _msthash="1622" style="padding-right: 16px; transform: translateY(120px);">7</div><div data-line-number="8" class="react-line-number react-code-text virtual" _msttexthash="5096" _msthash="1623" style="padding-right: 16px; transform: translateY(140px);">8</div><div data-line-number="9" class="react-line-number react-code-text virtual" _msttexthash="5187" _msthash="1624" style="padding-right: 16px; transform: translateY(160px);">9</div><div data-line-number="10" class="react-line-number react-code-text virtual" _msttexthash="9451" _msthash="1625" style="padding-right: 16px; transform: translateY(180px);">10</div><div data-line-number="11" class="react-line-number react-code-text virtual" _msttexthash="9555" _msthash="1626" style="padding-right: 16px; transform: translateY(200px);">11</div><div data-line-number="12" class="react-line-number react-code-text virtual" _msttexthash="9659" _msthash="1627" style="padding-right: 16px; transform: translateY(220px);">12</div><div data-line-number="13" class="react-line-number react-code-text virtual" _msttexthash="9763" _msthash="1628" style="padding-right: 16px; transform: translateY(240px);">13</div><div data-line-number="14" class="react-line-number react-code-text virtual" _msttexthash="9867" _msthash="1629" style="padding-right: 16px; transform: translateY(260px);">14</div><div data-line-number="15" class="react-line-number react-code-text virtual" _msttexthash="9971" _msthash="1630" style="padding-right: 16px; transform: translateY(280px);">15</div><div data-line-number="16" class="react-line-number react-code-text virtual" _msttexthash="10075" _msthash="1631" style="padding-right: 16px; transform: translateY(300px);">16</div><div data-line-number="17" class="react-line-number react-code-text virtual" _msttexthash="10179" _msthash="1632" style="padding-right: 16px; transform: translateY(320px);">17</div><div data-line-number="18" class="react-line-number react-code-text virtual" _msttexthash="10283" _msthash="1633" style="padding-right: 16px; transform: translateY(340px);">18</div><div data-line-number="19" class="react-line-number react-code-text virtual" _msttexthash="10387" _msthash="1634" style="padding-right: 16px; transform: translateY(360px);">19</div><div data-line-number="20" class="react-line-number react-code-text virtual" _msttexthash="9542" _msthash="1635" style="padding-right: 16px; transform: translateY(380px);">20</div><div data-line-number="21" class="react-line-number react-code-text virtual" _msttexthash="9646" _msthash="1636" style="padding-right: 16px; transform: translateY(400px);">21</div><div data-line-number="22" class="react-line-number react-code-text virtual" _msttexthash="9750" _msthash="1637" style="padding-right: 16px; transform: translateY(420px);">22</div><div data-line-number="23" class="react-line-number react-code-text virtual" _msttexthash="9854" _msthash="1638" style="padding-right: 16px; transform: translateY(440px);">23</div><div data-line-number="24" class="react-line-number react-code-text virtual" _msttexthash="9958" _msthash="1639" style="padding-right: 16px; transform: translateY(460px);">24</div><div data-line-number="25" class="react-line-number react-code-text virtual" _msttexthash="10062" _msthash="1640" style="padding-right: 16px; transform: translateY(480px);">25</div><div data-line-number="26" class="react-line-number react-code-text virtual" _msttexthash="10166" _msthash="1641" style="padding-right: 16px; transform: translateY(500px);">26</div><div data-line-number="27" class="react-line-number react-code-text virtual" _msttexthash="10270" _msthash="1642" style="padding-right: 16px; transform: translateY(520px);">27</div><div data-line-number="28" class="react-line-number react-code-text virtual" _msttexthash="10374" _msthash="1643" style="padding-right: 16px; transform: translateY(540px);">28</div><div data-line-number="29" class="react-line-number react-code-text virtual" _msttexthash="10478" _msthash="1644" style="padding-right: 16px; transform: translateY(560px);">29</div><div data-line-number="30" class="react-line-number react-code-text virtual" _msttexthash="9633" _msthash="1645" style="padding-right: 16px; transform: translateY(580px);">30</div><div data-line-number="31" class="react-line-number react-code-text virtual" _msttexthash="9737" _msthash="1646" style="padding-right: 16px; transform: translateY(600px);">31</div><div data-line-number="32" class="react-line-number react-code-text virtual" _msttexthash="9841" _msthash="1647" style="padding-right: 16px; transform: translateY(620px);">32</div><div data-line-number="33" class="react-line-number react-code-text virtual" _msttexthash="9945" _msthash="1648" style="padding-right: 16px; transform: translateY(640px);">33</div><div data-line-number="34" class="react-line-number react-code-text virtual" _msttexthash="10049" _msthash="1649" style="padding-right: 16px; transform: translateY(660px);">34</div><div data-line-number="35" class="react-line-number react-code-text virtual" _msttexthash="10153" _msthash="1650" style="padding-right: 16px; transform: translateY(680px);">35</div><div data-line-number="36" class="react-line-number react-code-text virtual" _msttexthash="10257" _msthash="1651" style="padding-right: 16px; transform: translateY(700px);">36</div><div data-line-number="37" class="react-line-number react-code-text virtual" _msttexthash="10361" _msthash="1652" style="padding-right: 16px; transform: translateY(720px);">37</div><div data-line-number="38" class="react-line-number react-code-text virtual" _msttexthash="10465" _msthash="1653" style="padding-right: 16px; transform: translateY(740px);">38</div><div data-line-number="39" class="react-line-number react-code-text virtual" _msttexthash="10569" _msthash="1654" style="padding-right: 16px; transform: translateY(760px);">39</div><div data-line-number="40" class="react-line-number react-code-text virtual" _msttexthash="9724" _msthash="1655" style="padding-right: 16px; transform: translateY(780px);">40</div><div data-line-number="41" class="react-line-number react-code-text virtual" _msttexthash="9828" _msthash="1656" style="padding-right: 16px; transform: translateY(800px);">41</div><div data-line-number="42" class="react-line-number react-code-text virtual" _msttexthash="9932" _msthash="1657" style="padding-right: 16px; transform: translateY(820px);">42</div><div data-line-number="43" class="react-line-number react-code-text virtual" _msttexthash="10036" _msthash="1658" style="padding-right: 16px; transform: translateY(840px);">43</div><div data-line-number="44" class="react-line-number react-code-text virtual" _msttexthash="10140" _msthash="1659" style="padding-right: 16px; transform: translateY(860px);">44</div><div data-line-number="45" class="react-line-number react-code-text virtual" _msttexthash="10244" _msthash="1660" style="padding-right: 16px; transform: translateY(880px);">45</div><div data-line-number="46" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(900px);"><font _mstmutation="1" _msttexthash="10348" _msthash="1661">46</font><span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Sección de código de contracción" role="button" class="Box-sc-g0xbh4-0 iGLarr" _mstaria-label="418249" _msthash="1662"><svg aria-hidden="true" focusable="false" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="47" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10452" _msthash="1663" style="padding-right: 16px; transform: translateY(920px);">47</div><div data-line-number="48" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10556" _msthash="1664" style="padding-right: 16px; transform: translateY(940px);">48</div><div data-line-number="49" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10660" _msthash="1665" style="padding-right: 16px; transform: translateY(960px);">49</div><div data-line-number="50" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="9815" _msthash="1666" style="padding-right: 16px; transform: translateY(980px);">50</div><div data-line-number="51" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="9919" _msthash="1667" style="padding-right: 16px; transform: translateY(1000px);">51</div><div data-line-number="52" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10023" _msthash="1668" style="padding-right: 16px; transform: translateY(1020px);">52</div><div data-line-number="53" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10127" _msthash="1669" style="padding-right: 16px; transform: translateY(1040px);">53</div><div data-line-number="54" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10231" _msthash="1670" style="padding-right: 16px; transform: translateY(1060px);">54</div><div data-line-number="55" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10335" _msthash="1671" style="padding-right: 16px; transform: translateY(1080px);">55</div><div data-line-number="56" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10439" _msthash="1672" style="padding-right: 16px; transform: translateY(1100px);">56</div><div data-line-number="57" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10543" _msthash="1673" style="padding-right: 16px; transform: translateY(1120px);">57</div><div data-line-number="58" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10647" _msthash="1674" style="padding-right: 16px; transform: translateY(1140px);">58</div><div data-line-number="59" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10751" _msthash="1675" style="padding-right: 16px; transform: translateY(1160px);">59</div><div data-line-number="60" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="9906" _msthash="1676" style="padding-right: 16px; transform: translateY(1180px);">60</div><div data-line-number="61" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10010" _msthash="1677" style="padding-right: 16px; transform: translateY(1200px);">61</div><div data-line-number="62" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10114" _msthash="1678" style="padding-right: 16px; transform: translateY(1220px);">62</div><div data-line-number="63" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10218" _msthash="1679" style="padding-right: 16px; transform: translateY(1240px);">63</div><div data-line-number="64" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10322" _msthash="1680" style="padding-right: 16px; transform: translateY(1260px);">64</div><div data-line-number="65" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10426" _msthash="1681" style="padding-right: 16px; transform: translateY(1280px);">65</div><div data-line-number="66" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10530" _msthash="1682" style="padding-right: 16px; transform: translateY(1300px);">66</div><div data-line-number="67" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10634" _msthash="1683" style="padding-right: 16px; transform: translateY(1320px);">67</div><div data-line-number="68" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10738" _msthash="1684" style="padding-right: 16px; transform: translateY(1340px);">68</div><div data-line-number="69" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10842" _msthash="1685" style="padding-right: 16px; transform: translateY(1360px);">69</div><div data-line-number="70" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="9997" _msthash="1686" style="padding-right: 16px; transform: translateY(1380px);">70</div><div data-line-number="71" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10101" _msthash="1687" style="padding-right: 16px; transform: translateY(1400px);">71</div><div data-line-number="72" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10205" _msthash="1688" style="padding-right: 16px; transform: translateY(1420px);">72</div><div data-line-number="73" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10309" _msthash="1689" style="padding-right: 16px; transform: translateY(1440px);">73</div><div data-line-number="74" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10413" _msthash="1690" style="padding-right: 16px; transform: translateY(1460px);">74</div><div data-line-number="75" class="child-of-line-45  react-line-number react-code-text virtual" _msttexthash="10517" _msthash="1691" style="padding-right: 16px; transform: translateY(1480px);">75</div><div data-line-number="106" class="react-line-number react-code-text virtual" _msttexthash="15769" _msthash="1596" style="padding-right: 16px; transform: translateY(2100px);">106</div><div data-line-number="107" class="react-line-number react-code-text virtual" _msttexthash="15886" _msthash="1595" style="padding-right: 16px; transform: translateY(2120px);">107</div><div data-line-number="108" class="react-line-number react-code-text virtual" _msttexthash="16003" _msthash="1594" style="padding-right: 16px; transform: translateY(2140px);">108</div><div data-line-number="109" class="react-line-number react-code-text virtual" _msttexthash="16120" _msthash="1593" style="padding-right: 16px; transform: translateY(2160px);">109</div><div data-line-number="110" class="react-line-number react-code-text virtual" _msttexthash="15171" _msthash="1592" style="padding-right: 16px; transform: translateY(2180px);">110</div><div data-line-number="111" class="react-line-number react-code-text virtual" _msttexthash="15288" _msthash="1591" style="padding-right: 16px; transform: translateY(2200px);">111</div><div data-line-number="112" class="react-line-number react-code-text virtual" _msttexthash="15405" _msthash="1590" style="padding-right: 16px; transform: translateY(2220px);">112</div><div data-line-number="113" class="react-line-number react-code-text virtual" _msttexthash="15522" _msthash="1589" style="padding-right: 16px; transform: translateY(2240px);">113</div><div data-line-number="114" class="react-line-number react-code-text virtual" _msttexthash="15639" _msthash="1588" style="padding-right: 16px; transform: translateY(2260px);">114</div><div data-line-number="115" class="react-line-number react-code-text virtual" _msttexthash="15756" _msthash="1587" style="padding-right: 16px; transform: translateY(2280px);">115</div><div data-line-number="116" class="react-line-number react-code-text virtual" _msttexthash="15873" _msthash="1586" style="padding-right: 16px; transform: translateY(2300px);">116</div><div data-line-number="117" class="react-line-number react-code-text virtual" _msttexthash="15990" _msthash="1585" style="padding-right: 16px; transform: translateY(2320px);">117</div><div data-line-number="118" class="react-line-number react-code-text virtual" _msttexthash="16107" _msthash="1584" style="padding-right: 16px; transform: translateY(2340px);">118</div><div data-line-number="119" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2360px);"><font _mstmutation="1" _msttexthash="16224" _msthash="1582">119</font><span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Sección de código de contracción" role="button" class="Box-sc-g0xbh4-0 iGLarr" _mstaria-label="418249" _msthash="1583"><svg aria-hidden="true" focusable="false" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="120" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15275" _msthash="1581" style="padding-right: 16px; transform: translateY(2380px);">120</div><div data-line-number="121" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15392" _msthash="1580" style="padding-right: 16px; transform: translateY(2400px);">121</div><div data-line-number="122" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15509" _msthash="1579" style="padding-right: 16px; transform: translateY(2420px);">122</div><div data-line-number="123" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15626" _msthash="1578" style="padding-right: 16px; transform: translateY(2440px);">123</div><div data-line-number="124" class="child-of-line-118  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2460px);" _msttexthash="15743" _msthash="2187">124</div><div data-line-number="125" class="child-of-line-118  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2480px);" _msttexthash="15860" _msthash="2214">125</div><div data-line-number="126" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15977" _msthash="2213" style="padding-right: 16px; transform: translateY(2500px);">126</div><div data-line-number="127" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16094" _msthash="2212" style="padding-right: 16px; transform: translateY(2520px);">127</div><div data-line-number="128" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16211" _msthash="2211" style="padding-right: 16px; transform: translateY(2540px);">128</div><div data-line-number="129" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16328" _msthash="2210" style="padding-right: 16px; transform: translateY(2560px);">129</div><div data-line-number="130" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15379" _msthash="2209" style="padding-right: 16px; transform: translateY(2580px);">130</div><div data-line-number="131" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15496" _msthash="2208" style="padding-right: 16px; transform: translateY(2600px);">131</div><div data-line-number="132" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15613" _msthash="2207" style="padding-right: 16px; transform: translateY(2620px);">132</div><div data-line-number="133" class="child-of-line-118  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2640px);" _msttexthash="15730" _msthash="2247">133</div><div data-line-number="134" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15847" _msthash="2246" style="padding-right: 16px; transform: translateY(2660px);">134</div><div data-line-number="135" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15964" _msthash="2245" style="padding-right: 16px; transform: translateY(2680px);">135</div><div data-line-number="136" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16081" _msthash="2244" style="padding-right: 16px; transform: translateY(2700px);">136</div><div data-line-number="137" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16198" _msthash="2243" style="padding-right: 16px; transform: translateY(2720px);">137</div><div data-line-number="138" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16315" _msthash="2242" style="padding-right: 16px; transform: translateY(2740px);">138</div><div data-line-number="139" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16432" _msthash="2241" style="padding-right: 16px; transform: translateY(2760px);">139</div><div data-line-number="140" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15483" _msthash="2240" style="padding-right: 16px; transform: translateY(2780px);">140</div><div data-line-number="141" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15600" _msthash="2239" style="padding-right: 16px; transform: translateY(2800px);">141</div><div data-line-number="142" class="child-of-line-118  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2820px);" _msttexthash="15717" _msthash="2250">142</div><div data-line-number="143" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15834" _msthash="2249" style="padding-right: 16px; transform: translateY(2840px);">143</div><div data-line-number="144" class="child-of-line-118  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2860px);" _msttexthash="15951" _msthash="2253">144</div><div data-line-number="145" class="child-of-line-118  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2880px);" _msttexthash="16068" _msthash="2257">145</div><div data-line-number="146" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16185" _msthash="2256" style="padding-right: 16px; transform: translateY(2900px);">146</div><div data-line-number="147" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16302" _msthash="2255" style="padding-right: 16px; transform: translateY(2920px);">147</div><div data-line-number="148" class="child-of-line-118  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(2940px);" _msttexthash="16419" _msthash="2358">148</div><div data-line-number="149" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="16536" _msthash="2357" style="padding-right: 16px; transform: translateY(2960px);">149</div><div data-line-number="150" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15587" _msthash="2356" style="padding-right: 16px; transform: translateY(2980px);">150</div><div data-line-number="151" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15704" _msthash="2355" style="padding-right: 16px; transform: translateY(3000px);">151</div><div data-line-number="152" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15821" _msthash="2354" style="padding-right: 16px; transform: translateY(3020px);">152</div><div data-line-number="153" class="child-of-line-118  react-line-number react-code-text virtual" _msttexthash="15938" _msthash="2353" style="padding-right: 16px; transform: translateY(3040px);">153</div><div data-line-number="154" class="react-line-number react-code-text virtual" _msttexthash="16055" _msthash="2352" style="padding-right: 16px; transform: translateY(3060px);">154</div><div data-line-number="155" class="react-line-number react-code-text virtual" _msttexthash="16172" _msthash="2351" style="padding-right: 16px; transform: translateY(3080px);">155</div><div data-line-number="156" class="react-line-number react-code-text virtual" _msttexthash="16289" _msthash="2350" style="padding-right: 16px; transform: translateY(3100px);">156</div><div data-line-number="157" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3120px);" _msttexthash="16406" _msthash="2362">157</div><div data-line-number="158" class="react-line-number react-code-text virtual" _msttexthash="16523" _msthash="2361" style="padding-right: 16px; transform: translateY(3140px);">158</div><div data-line-number="159" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3160px);" _msttexthash="16640" _msthash="2380">159</div><div data-line-number="160" class="react-line-number react-code-text virtual" _msttexthash="15691" _msthash="2379" style="padding-right: 16px; transform: translateY(3180px);">160</div><div data-line-number="161" class="react-line-number react-code-text virtual" _msttexthash="15808" _msthash="2378" style="padding-right: 16px; transform: translateY(3200px);">161</div><div data-line-number="162" class="react-line-number react-code-text virtual" _msttexthash="15925" _msthash="2377" style="padding-right: 16px; transform: translateY(3220px);">162</div><div data-line-number="163" class="react-line-number react-code-text virtual" _msttexthash="16042" _msthash="2376" style="padding-right: 16px; transform: translateY(3240px);">163</div><div data-line-number="164" class="react-line-number react-code-text virtual" _msttexthash="16159" _msthash="2375" style="padding-right: 16px; transform: translateY(3260px);">164</div><div data-line-number="165" class="react-line-number react-code-text virtual" _msttexthash="16276" _msthash="2374" style="padding-right: 16px; transform: translateY(3280px);">165</div><div data-line-number="166" class="react-line-number react-code-text virtual" _msttexthash="16393" _msthash="2373" style="padding-right: 16px; transform: translateY(3300px);">166</div><div data-line-number="167" class="react-line-number react-code-text virtual" _msttexthash="16510" _msthash="2372" style="padding-right: 16px; transform: translateY(3320px);">167</div><div data-line-number="168" class="react-line-number react-code-text virtual" _msttexthash="16627" _msthash="2371" style="padding-right: 16px; transform: translateY(3340px);">168</div><div data-line-number="169" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3360px);" _msttexthash="16744" _msthash="2382">169</div><div data-line-number="170" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3380px);" _msttexthash="15795" _msthash="2385">170</div><div data-line-number="171" class="react-line-number react-code-text virtual" _msttexthash="15912" _msthash="2384" style="padding-right: 16px; transform: translateY(3400px);">171</div><div data-line-number="172" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3420px);" _msttexthash="16029" _msthash="2386">172</div><div data-line-number="173" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3440px);" _msttexthash="16146" _msthash="2424">173</div><div data-line-number="174" class="react-line-number react-code-text virtual" _msttexthash="16263" _msthash="2423" style="padding-right: 16px; transform: translateY(3460px);">174</div><div data-line-number="175" class="react-line-number react-code-text virtual" _msttexthash="16380" _msthash="2422" style="padding-right: 16px; transform: translateY(3480px);">175</div><div data-line-number="176" class="react-line-number react-code-text virtual" _msttexthash="16497" _msthash="2421" style="padding-right: 16px; transform: translateY(3500px);">176</div><div data-line-number="177" class="react-line-number react-code-text virtual" _msttexthash="16614" _msthash="2420" style="padding-right: 16px; transform: translateY(3520px);">177</div><div data-line-number="178" class="react-line-number react-code-text virtual" _msttexthash="16731" _msthash="2419" style="padding-right: 16px; transform: translateY(3540px);">178</div><div data-line-number="179" class="react-line-number react-code-text virtual" _msttexthash="16848" _msthash="2418" style="padding-right: 16px; transform: translateY(3560px);">179</div><div data-line-number="180" class="react-line-number react-code-text virtual" _msttexthash="15899" _msthash="2417" style="padding-right: 16px; transform: translateY(3580px);">180</div><div data-line-number="181" class="react-line-number react-code-text virtual" _msttexthash="16016" _msthash="2416" style="padding-right: 16px; transform: translateY(3600px);">181</div><div data-line-number="182" class="react-line-number react-code-text virtual" _msttexthash="16133" _msthash="2415" style="padding-right: 16px; transform: translateY(3620px);">182</div><div data-line-number="183" class="react-line-number react-code-text virtual" _msttexthash="16250" _msthash="2414" style="padding-right: 16px; transform: translateY(3640px);">183</div><div data-line-number="184" class="react-line-number react-code-text virtual" _msttexthash="16367" _msthash="2413" style="padding-right: 16px; transform: translateY(3660px);">184</div><div data-line-number="185" class="react-line-number react-code-text virtual" _msttexthash="16484" _msthash="2412" style="padding-right: 16px; transform: translateY(3680px);">185</div><div data-line-number="186" class="react-line-number react-code-text virtual" _msttexthash="16601" _msthash="2411" style="padding-right: 16px; transform: translateY(3700px);">186</div><div data-line-number="187" class="react-line-number react-code-text virtual" _msttexthash="16718" _msthash="2410" style="padding-right: 16px; transform: translateY(3720px);">187</div><div data-line-number="188" class="react-line-number react-code-text virtual" _msttexthash="16835" _msthash="2409" style="padding-right: 16px; transform: translateY(3740px);">188</div><div data-line-number="189" class="react-line-number react-code-text virtual" _msttexthash="16952" _msthash="2408" style="padding-right: 16px; transform: translateY(3760px);">189</div><div data-line-number="190" class="react-line-number react-code-text virtual" _msttexthash="16003" _msthash="2407" style="padding-right: 16px; transform: translateY(3780px);">190</div><div data-line-number="191" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3800px);" _msttexthash="16120" _msthash="2425">191</div><div data-line-number="192" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3820px);" _msttexthash="16237" _msthash="2461">192</div><div data-line-number="193" class="react-line-number react-code-text virtual" _msttexthash="16354" _msthash="2460" style="padding-right: 16px; transform: translateY(3840px);">193</div><div data-line-number="194" class="react-line-number react-code-text virtual" _msttexthash="16471" _msthash="2459" style="padding-right: 16px; transform: translateY(3860px);">194</div><div data-line-number="195" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3880px);"><font _mstmutation="1" _msttexthash="16588" _msthash="2457">195</font><span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Sección de código de contracción" role="button" class="Box-sc-g0xbh4-0 iGLarr" _mstaria-label="418249" _msthash="2458"><svg aria-hidden="true" focusable="false" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="196" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="16705" _msthash="2456" style="padding-right: 16px; transform: translateY(3900px);">196</div><div data-line-number="197" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="16822" _msthash="2455" style="padding-right: 16px; transform: translateY(3920px);">197</div><div data-line-number="198" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="16939" _msthash="2454" style="padding-right: 16px; transform: translateY(3940px);">198</div><div data-line-number="199" class="child-of-line-194  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3960px);" _msttexthash="17056" _msthash="2464">199</div><div data-line-number="200" class="child-of-line-194  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(3980px);" _msttexthash="15158" _msthash="2474">200</div><div data-line-number="201" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15275" _msthash="2473" style="padding-right: 16px; transform: translateY(4000px);">201</div><div data-line-number="202" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15392" _msthash="2472" style="padding-right: 16px; transform: translateY(4020px);">202</div><div data-line-number="203" class="child-of-line-194  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4040px);" _msttexthash="15509" _msthash="2513">203</div><div data-line-number="204" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15626" _msthash="2512" style="padding-right: 16px; transform: translateY(4060px);">204</div><div data-line-number="205" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15743" _msthash="2511" style="padding-right: 16px; transform: translateY(4080px);">205</div><div data-line-number="206" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15860" _msthash="2510" style="padding-right: 16px; transform: translateY(4100px);">206</div><div data-line-number="207" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15977" _msthash="2509" style="padding-right: 16px; transform: translateY(4120px);">207</div><div data-line-number="208" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="16094" _msthash="2508" style="padding-right: 16px; transform: translateY(4140px);">208</div><div data-line-number="209" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="16211" _msthash="2507" style="padding-right: 16px; transform: translateY(4160px);">209</div><div data-line-number="210" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15262" _msthash="2506" style="padding-right: 16px; transform: translateY(4180px);">210</div><div data-line-number="211" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15379" _msthash="2505" style="padding-right: 16px; transform: translateY(4200px);">211</div><div data-line-number="212" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15496" _msthash="2504" style="padding-right: 16px; transform: translateY(4220px);">212</div><div data-line-number="213" class="child-of-line-194  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4240px);" _msttexthash="15613" _msthash="2538">213</div><div data-line-number="214" class="child-of-line-194  react-line-number react-code-text virtual" _msttexthash="15730" _msthash="2537" style="padding-right: 16px; transform: translateY(4260px);">214</div><div data-line-number="215" class="react-line-number react-code-text virtual" _msttexthash="15847" _msthash="2536" style="padding-right: 16px; transform: translateY(4280px);">215</div><div data-line-number="216" class="react-line-number react-code-text virtual" _msttexthash="15964" _msthash="2535" style="padding-right: 16px; transform: translateY(4300px);">216</div><div data-line-number="217" class="react-line-number react-code-text virtual" _msttexthash="16081" _msthash="2534" style="padding-right: 16px; transform: translateY(4320px);">217</div><div data-line-number="218" class="react-line-number react-code-text virtual" _msttexthash="16198" _msthash="2533" style="padding-right: 16px; transform: translateY(4340px);">218</div><div data-line-number="219" class="react-line-number react-code-text virtual" _msttexthash="16315" _msthash="2532" style="padding-right: 16px; transform: translateY(4360px);">219</div><div data-line-number="220" class="react-line-number react-code-text virtual" _msttexthash="15366" _msthash="2531" style="padding-right: 16px; transform: translateY(4380px);">220</div><div data-line-number="221" class="react-line-number react-code-text virtual" _msttexthash="15483" _msthash="2530" style="padding-right: 16px; transform: translateY(4400px);">221</div><div data-line-number="222" class="react-line-number react-code-text virtual" _msttexthash="15600" _msthash="2529" style="padding-right: 16px; transform: translateY(4420px);">222</div><div data-line-number="223" class="react-line-number react-code-text virtual" _msttexthash="15717" _msthash="2528" style="padding-right: 16px; transform: translateY(4440px);">223</div><div data-line-number="224" class="react-line-number react-code-text virtual" _msttexthash="15834" _msthash="2527" style="padding-right: 16px; transform: translateY(4460px);">224</div><div data-line-number="225" class="react-line-number react-code-text virtual" _msttexthash="15951" _msthash="2526" style="padding-right: 16px; transform: translateY(4480px);">225</div><div data-line-number="226" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4500px);" _msttexthash="16068" _msthash="2539">226</div><div data-line-number="227" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4520px);"><font _mstmutation="1" _msttexthash="16185" _msthash="2552">227</font><span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Sección de código de contracción" role="button" class="Box-sc-g0xbh4-0 iGLarr" _mstaria-label="418249" _msthash="2553"><svg aria-hidden="true" focusable="false" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="228" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="16302" _msthash="2551" style="padding-right: 16px; transform: translateY(4540px);">228</div><div data-line-number="229" class="child-of-line-226  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4560px);" _msttexthash="16419" _msthash="2560">229</div><div data-line-number="230" class="child-of-line-226  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4580px);" _msttexthash="15470" _msthash="2605">230</div><div data-line-number="231" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="15587" _msthash="2604" style="padding-right: 16px; transform: translateY(4600px);">231</div><div data-line-number="232" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="15704" _msthash="2603" style="padding-right: 16px; transform: translateY(4620px);">232</div><div data-line-number="233" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="15821" _msthash="2602" style="padding-right: 16px; transform: translateY(4640px);">233</div><div data-line-number="234" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="15938" _msthash="2601" style="padding-right: 16px; transform: translateY(4660px);">234</div><div data-line-number="235" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="16055" _msthash="2600" style="padding-right: 16px; transform: translateY(4680px);">235</div><div data-line-number="236" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="16172" _msthash="2599" style="padding-right: 16px; transform: translateY(4700px);">236</div><div data-line-number="237" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="16289" _msthash="2598" style="padding-right: 16px; transform: translateY(4720px);">237</div><div data-line-number="238" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="16406" _msthash="2597" style="padding-right: 16px; transform: translateY(4740px);">238</div><div data-line-number="239" class="child-of-line-226  react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(4760px);" _msttexthash="16523" _msthash="2613">239</div><div data-line-number="240" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="15574" _msthash="2612" style="padding-right: 16px; transform: translateY(4780px);">240</div><div data-line-number="241" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="15691" _msthash="1719" style="padding-right: 16px; transform: translateY(4800px);">241</div><div data-line-number="242" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="15808" _msthash="1720" style="padding-right: 16px; transform: translateY(4820px);">242</div><div data-line-number="243" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="15925" _msthash="1721" style="padding-right: 16px; transform: translateY(4840px);">243</div><div data-line-number="244" class="child-of-line-226  react-line-number react-code-text virtual" _msttexthash="16042" _msthash="1722" style="padding-right: 16px; transform: translateY(4860px);">244</div><div data-line-number="245" class="react-line-number react-code-text virtual" _msttexthash="16159" _msthash="1723" style="padding-right: 16px; transform: translateY(4880px);">245</div><div data-line-number="246" class="react-line-number react-code-text virtual" _msttexthash="16276" _msthash="1724" style="padding-right: 16px; transform: translateY(4900px);">246</div><div data-line-number="247" class="react-line-number react-code-text virtual" _msttexthash="16393" _msthash="1725" style="padding-right: 16px; transform: translateY(4920px);">247</div><div data-line-number="248" class="react-line-number react-code-text virtual" _msttexthash="16510" _msthash="1726" style="padding-right: 16px; transform: translateY(4940px);">248</div><div data-line-number="249" class="react-line-number react-code-text virtual" _msttexthash="16627" _msthash="1727" style="padding-right: 16px; transform: translateY(4960px);">249</div><div data-line-number="250" class="react-line-number react-code-text virtual" _msttexthash="15678" _msthash="1728" style="padding-right: 16px; transform: translateY(4980px);">250</div><div data-line-number="251" class="react-line-number react-code-text virtual" _msttexthash="15795" _msthash="1729" style="padding-right: 16px; transform: translateY(5000px);">251</div><div data-line-number="252" class="react-line-number react-code-text virtual" _msttexthash="15912" _msthash="1730" style="padding-right: 16px; transform: translateY(5020px);">252</div><div data-line-number="253" class="react-line-number react-code-text virtual" _msttexthash="16029" _msthash="1731" style="padding-right: 16px; transform: translateY(5040px);">253</div><div data-line-number="254" class="react-line-number react-code-text virtual" _msttexthash="16146" _msthash="1732" style="padding-right: 16px; transform: translateY(5060px);">254</div><div data-line-number="255" class="react-line-number react-code-text virtual" _msttexthash="16263" _msthash="1733" style="padding-right: 16px; transform: translateY(5080px);">255</div><div data-line-number="256" class="react-line-number react-code-text virtual" _msttexthash="16380" _msthash="1734" style="padding-right: 16px; transform: translateY(5100px);">256</div><div data-line-number="257" class="react-line-number react-code-text virtual" _msttexthash="16497" _msthash="1735" style="padding-right: 16px; transform: translateY(5120px);">257</div><div data-line-number="258" class="react-line-number react-code-text virtual" _msttexthash="16614" _msthash="1736" style="padding-right: 16px; transform: translateY(5140px);">258</div><div data-line-number="259" class="react-line-number react-code-text virtual" _msttexthash="16731" _msthash="1737" style="padding-right: 16px; transform: translateY(5160px);">259</div><div data-line-number="260" class="react-line-number react-code-text virtual" _msttexthash="15782" _msthash="1738" style="padding-right: 16px; transform: translateY(5180px);">260</div><div data-line-number="261" class="react-line-number react-code-text virtual" _msttexthash="15899" _msthash="1739" style="padding-right: 16px; transform: translateY(5200px);">261</div><div data-line-number="262" class="react-line-number react-code-text virtual" _msttexthash="16016" _msthash="1740" style="padding-right: 16px; transform: translateY(5220px);">262</div><div data-line-number="263" class="react-line-number react-code-text virtual" _msttexthash="16133" _msthash="1741" style="padding-right: 16px; transform: translateY(5240px);">263</div><div data-line-number="264" class="react-line-number react-code-text virtual" _msttexthash="16250" _msthash="1742" style="padding-right: 16px; transform: translateY(5260px);">264</div><div data-line-number="265" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(5280px);"><font _mstmutation="1" _msttexthash="16367" _msthash="1743">265</font><span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Sección de código de contracción" role="button" class="Box-sc-g0xbh4-0 iGLarr" _mstaria-label="418249" _msthash="1744"><svg aria-hidden="true" focusable="false" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="266" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16484" _msthash="1745" style="padding-right: 16px; transform: translateY(5300px);">266</div><div data-line-number="267" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16601" _msthash="1746" style="padding-right: 16px; transform: translateY(5320px);">267</div><div data-line-number="268" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16718" _msthash="1747" style="padding-right: 16px; transform: translateY(5340px);">268</div><div data-line-number="269" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16835" _msthash="1748" style="padding-right: 16px; transform: translateY(5360px);">269</div><div data-line-number="270" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="15886" _msthash="1749" style="padding-right: 16px; transform: translateY(5380px);">270</div><div data-line-number="271" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16003" _msthash="1750" style="padding-right: 16px; transform: translateY(5400px);">271</div><div data-line-number="272" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16120" _msthash="1751" style="padding-right: 16px; transform: translateY(5420px);">272</div><div data-line-number="273" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16237" _msthash="1752" style="padding-right: 16px; transform: translateY(5440px);">273</div><div data-line-number="274" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16354" _msthash="1753" style="padding-right: 16px; transform: translateY(5460px);">274</div><div data-line-number="275" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16471" _msthash="1754" style="padding-right: 16px; transform: translateY(5480px);">275</div><div data-line-number="276" class="child-of-line-264  react-line-number react-code-text virtual" _msttexthash="16588" _msthash="1755" style="padding-right: 16px; transform: translateY(5500px);">276</div><div data-line-number="277" class="react-line-number react-code-text virtual" _msttexthash="16705" _msthash="1756" style="padding-right: 16px; transform: translateY(5520px);">277</div><div data-line-number="278" class="react-line-number react-code-text virtual" _msttexthash="16822" _msthash="1757" style="padding-right: 16px; transform: translateY(5540px);">278</div><div data-line-number="279" class="react-line-number react-code-text virtual" _msttexthash="16939" _msthash="1758" style="padding-right: 16px; transform: translateY(5560px);">279</div><div data-line-number="280" class="react-line-number react-code-text virtual" _msttexthash="15990" _msthash="1759" style="padding-right: 16px; transform: translateY(5580px);">280</div><div data-line-number="281" class="react-line-number react-code-text virtual" _msttexthash="16107" _msthash="1760" style="padding-right: 16px; transform: translateY(5600px);">281</div><div data-line-number="282" class="react-line-number react-code-text virtual" _msttexthash="16224" _msthash="1761" style="padding-right: 16px; transform: translateY(5620px);">282</div><div data-line-number="283" class="react-line-number react-code-text virtual" _msttexthash="16341" _msthash="1762" style="padding-right: 16px; transform: translateY(5640px);">283</div><div data-line-number="284" class="react-line-number react-code-text virtual" _msttexthash="16458" _msthash="1763" style="padding-right: 16px; transform: translateY(5660px);">284</div><div data-line-number="285" class="react-line-number react-code-text virtual" _msttexthash="16575" _msthash="1764" style="padding-right: 16px; transform: translateY(5680px);">285</div><div data-line-number="286" class="react-line-number react-code-text virtual" _msttexthash="16692" _msthash="1765" style="padding-right: 16px; transform: translateY(5700px);">286</div><div data-line-number="287" class="react-line-number react-code-text virtual" _msttexthash="16809" _msthash="1766" style="padding-right: 16px; transform: translateY(5720px);">287</div><div data-line-number="288" class="react-line-number react-code-text virtual" _msttexthash="16926" _msthash="1767" style="padding-right: 16px; transform: translateY(5740px);">288</div><div data-line-number="289" class="react-line-number react-code-text virtual" _msttexthash="17043" _msthash="1768" style="padding-right: 16px; transform: translateY(5760px);">289</div><div data-line-number="290" class="react-line-number react-code-text virtual" style="padding-right: 16px; transform: translateY(5780px);"><font _mstmutation="1" _msttexthash="16094" _msthash="1769">290</font><span class="Box-sc-g0xbh4-0 cJGaMs"><div aria-label="Sección de código de contracción" role="button" class="Box-sc-g0xbh4-0 iGLarr" _mstaria-label="418249" _msthash="1770"><svg aria-hidden="true" focusable="false" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path></svg></div></span></div><div data-line-number="291" class="child-of-line-289  react-line-number react-code-text virtual" _msttexthash="16211" _msthash="1771" style="padding-right: 16px; transform: translateY(5800px);">291</div><div data-line-number="292" class="child-of-line-289  react-line-number react-code-text virtual" _msttexthash="16328" _msthash="1772" style="padding-right: 16px; transform: translateY(5820px);">292</div><div data-line-number="293" class="child-of-line-289  react-line-number react-code-text virtual" _msttexthash="16445" _msthash="1773" style="padding-right: 16px; transform: translateY(5840px);">293</div><div data-line-number="294" class="child-of-line-289  react-line-number react-code-text virtual" _msttexthash="16562" _msthash="1774" style="padding-right: 16px; transform: translateY(5860px);">294</div><div data-line-number="295" class="child-of-line-289  react-line-number react-code-text virtual" _msttexthash="16679" _msthash="1775" style="padding-right: 16px; transform: translateY(5880px);">295</div><div data-line-number="296" class="child-of-line-289  react-line-number react-code-text virtual" _msttexthash="16796" _msthash="1776" style="padding-right: 16px; transform: translateY(5900px);">296</div><div data-line-number="297" class="child-of-line-289  react-line-number react-code-text virtual" _msttexthash="16913" _msthash="1777" style="padding-right: 16px; transform: translateY(5920px);">297</div><div data-line-number="298" class="react-line-number react-code-text virtual" _msttexthash="17030" _msthash="1778" style="padding-right: 16px; transform: translateY(5940px);">298</div><div data-line-number="299" class="react-line-number react-code-text virtual" _msttexthash="17147" _msthash="1779" style="padding-right: 16px; transform: translateY(5960px);">299</div><div data-line-number="300" class="react-line-number react-code-text virtual" _msttexthash="15249" _msthash="1780" style="padding-right: 16px; transform: translateY(5980px);">300</div><div data-line-number="301" class="react-line-number react-code-text virtual" _msttexthash="15366" _msthash="1781" style="padding-right: 16px; transform: translateY(6000px);">301</div><div data-line-number="302" class="react-line-number react-code-text virtual" _msttexthash="15483" _msthash="1782" style="padding-right: 16px; transform: translateY(6020px);">302</div><div data-line-number="303" class="react-line-number react-code-text virtual" _msttexthash="15600" _msthash="1783" style="padding-right: 16px; transform: translateY(6040px);">303</div><div data-line-number="304" class="react-line-number react-code-text virtual" _msttexthash="15717" _msthash="1784" style="padding-right: 16px; transform: translateY(6060px);">304</div><div data-line-number="305" class="react-line-number react-code-text virtual" _msttexthash="15834" _msthash="1785" style="padding-right: 16px; transform: translateY(6080px);">305</div><div data-line-number="306" class="react-line-number react-code-text virtual" _msttexthash="15951" _msthash="1786" style="padding-right: 16px; transform: translateY(6100px);">306</div><div data-line-number="307" class="react-line-number react-code-text virtual" _msttexthash="16068" _msthash="1787" style="padding-right: 16px; transform: translateY(6120px);">307</div><div data-line-number="308" class="react-line-number react-code-text virtual" _msttexthash="16185" _msthash="1788" style="padding-right: 16px; transform: translateY(6140px);">308</div><div data-line-number="309" class="react-line-number react-code-text virtual" _msttexthash="16302" _msthash="1789" style="padding-right: 16px; transform: translateY(6160px);">309</div><div data-line-number="310" class="react-line-number react-code-text virtual" _msttexthash="15353" _msthash="1790" style="padding-right: 16px; transform: translateY(6180px);">310</div><div data-line-number="311" class="react-line-number react-code-text virtual" _msttexthash="15470" _msthash="1791" style="padding-right: 16px; transform: translateY(6200px);">311</div><div data-line-number="312" class="react-line-number react-code-text virtual" _msttexthash="15587" _msthash="1792" style="padding-right: 16px; transform: translateY(6220px);">312</div><div data-line-number="313" class="react-line-number react-code-text virtual" _msttexthash="15704" _msthash="1793" style="padding-right: 16px; transform: translateY(6240px);">313</div><div data-line-number="314" class="react-line-number react-code-text virtual" _msttexthash="15821" _msthash="1794" style="padding-right: 16px; transform: translateY(6260px);">314</div></div><div class="react-code-lines" style="height: 6280px;"><div data-key="0" class="react-code-text react-code-line-contents" style="min-height: auto;"><div><div id="LC1" class="react-file-line html-div" data-testid="code-cell" data-line-number="1" inert="inert" style="position: relative;"><span class="pl-c">/**</span></div></div></div><div data-key="1" class="react-code-text react-code-line-contents virtual" style="transform: translateY(20px); min-height: auto;"><div><div id="LC2" class="react-file-line html-div" data-testid="code-cell" data-line-number="2" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3511313" _msthash="1795"> * Countable es un script que permite párrafos, palabras y caracteres en vivo.</span></div></div></div><div data-key="2" class="react-code-text react-code-line-contents virtual" style="transform: translateY(40px); min-height: auto;"><div><div id="LC3" class="react-file-line html-div" data-testid="code-cell" data-line-number="3" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="676000" _msthash="1796"> * contando con un elemento HTML.</span></div></div></div><div data-key="3" class="react-code-text react-code-line-contents virtual" style="transform: translateY(60px); min-height: auto;"><div><div id="LC4" class="react-file-line html-div" data-testid="code-cell" data-line-number="4" inert="inert" style="position: relative;"><span class="pl-c"> *</span></div></div></div><div data-key="4" class="react-code-text react-code-line-contents virtual" style="transform: translateY(80px); min-height: auto;"><div><div id="LC5" class="react-file-line html-div" data-testid="code-cell" data-line-number="5" inert="inert" style="position: relative;"><span class="pl-c"> * <span class="pl-k" _msttexthash="96135" _msthash="1797">@author</span><font _mstmutation="1" _msttexthash="1534897" _msthash="1798">   Sacha Schmid (&lt;https://github.com/RadLikeWhoa&gt;)</font></span></div></div></div><div data-key="5" class="react-code-text react-code-line-contents virtual" style="transform: translateY(100px); min-height: auto;"><div><div id="LC6" class="react-file-line html-div" data-testid="code-cell" data-line-number="6" inert="inert" style="position: relative;"><span class="pl-c"> * <span class="pl-k" _msttexthash="116337" _msthash="1799">@version</span><font _mstmutation="1" _msttexthash="28028" _msthash="1800">  3.0.1</font></span></div></div></div><div data-key="6" class="react-code-text react-code-line-contents virtual" style="transform: translateY(120px); min-height: auto;"><div><div id="LC7" class="react-file-line html-div" data-testid="code-cell" data-line-number="7" inert="inert" style="position: relative;"><span class="pl-c"> * <span class="pl-k" _msttexthash="111631" _msthash="1801">@license</span><font _mstmutation="1" _msttexthash="24427" _msthash="1802">  MIT</font></span></div></div></div><div data-key="7" class="react-code-text react-code-line-contents virtual" style="transform: translateY(140px); min-height: auto;"><div><div id="LC8" class="react-file-line html-div" data-testid="code-cell" data-line-number="8" inert="inert" style="position: relative;"><span class="pl-c"> * <span class="pl-k" _msttexthash="42731" _msthash="1803">@see</span><font _mstmutation="1" _msttexthash="1349660" _msthash="1804">      &lt;http://radlikewhoa.github.io/Countable/&gt;</font></span></div></div></div><div data-key="8" class="react-code-text react-code-line-contents virtual" style="transform: translateY(160px); min-height: auto;"><div><div id="LC9" class="react-file-line html-div" data-testid="code-cell" data-line-number="9" inert="inert" style="position: relative;"><span class="pl-c"> */</span></div></div></div><div data-key="9" class="react-code-text react-code-line-contents virtual" style="transform: translateY(180px); min-height: auto;"><div><div id="LC10" class="react-file-line html-div" data-testid="code-cell" data-line-number="10" inert="inert" style="position: relative;">
</div></div></div><div data-key="10" class="react-code-text react-code-line-contents virtual" style="transform: translateY(200px); min-height: auto;"><div><div id="LC11" class="react-file-line html-div" data-testid="code-cell" data-line-number="11" inert="inert" style="position: relative;"><span class="pl-c">/**</span></div></div></div><div data-key="11" class="react-code-text react-code-line-contents virtual" style="transform: translateY(220px); min-height: auto;"><div><div id="LC12" class="react-file-line html-div" data-testid="code-cell" data-line-number="12" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="4190082" _msthash="1805"> * Nota: A los efectos de esta documentación interna, se incluyen argumentos del tipo</span></div></div></div><div data-key="12" class="react-code-text react-code-line-contents virtual" style="transform: translateY(240px); min-height: auto;"><div><div id="LC13" class="react-file-line html-div" data-testid="code-cell" data-line-number="13" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2462954" _msthash="1806"> * Los {Nodos} deben interpretarse como {NodeList} o {Element}.</span></div></div></div><div data-key="13" class="react-code-text react-code-line-contents virtual" style="transform: translateY(260px); min-height: auto;"><div><div id="LC14" class="react-file-line html-div" data-testid="code-cell" data-line-number="14" inert="inert" style="position: relative;"><span class="pl-c"> */</span></div></div></div><div data-key="14" class="react-code-text react-code-line-contents virtual" style="transform: translateY(280px); min-height: auto;"><div><div id="LC15" class="react-file-line html-div" data-testid="code-cell" data-line-number="15" inert="inert" style="position: relative;">
</div></div></div><div data-key="15" class="react-code-text react-code-line-contents virtual" style="transform: translateY(300px); min-height: auto;"><div><div id="LC16" class="react-file-line html-div" data-testid="code-cell" data-line-number="16" inert="inert" style="position: relative;"><span class="pl-kos">;</span><span class="pl-kos">(</span><span class="pl-k" _msttexthash="118703" _msthash="1807">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="77051" _msthash="1808">global</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="16" class="react-code-text react-code-line-contents virtual" style="transform: translateY(320px); min-height: auto;"><div><div id="LC17" class="react-file-line html-div" data-testid="code-cell" data-line-number="17" inert="inert" style="position: relative;">  <span class="pl-s" _msttexthash="215319" _msthash="1809">'Uso estricto'</span></div></div></div><div data-key="17" class="react-code-text react-code-line-contents virtual" style="transform: translateY(340px); min-height: auto;"><div><div id="LC18" class="react-file-line html-div" data-testid="code-cell" data-line-number="18" inert="inert" style="position: relative;">
</div></div></div><div data-key="18" class="react-code-text react-code-line-contents virtual" style="transform: translateY(360px); min-height: auto;"><div><div id="LC19" class="react-file-line html-div" data-testid="code-cell" data-line-number="19" inert="inert" style="position: relative;">  <span class="pl-c">/**</span></div></div></div><div data-key="19" class="react-code-text react-code-line-contents virtual" style="transform: translateY(380px); min-height: auto;"><div><div id="LC20" class="react-file-line html-div" data-testid="code-cell" data-line-number="20" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="114452" _msthash="1810">@private</span></span></div></div></div><div data-key="20" class="react-code-text react-code-line-contents virtual" style="transform: translateY(400px); min-height: auto;"><div><div id="LC21" class="react-file-line html-div" data-testid="code-cell" data-line-number="21" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="21" class="react-code-text react-code-line-contents virtual" style="transform: translateY(420px); min-height: auto;"><div><div id="LC22" class="react-file-line html-div" data-testid="code-cell" data-line-number="22" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3340727" _msthash="1811"> * 'liveElements' contiene todos los elementos que tienen el conteo en vivo</span></div></div></div><div data-key="22" class="react-code-text react-code-line-contents virtual" style="transform: translateY(440px); min-height: auto;"><div><div id="LC23" class="react-file-line html-div" data-testid="code-cell" data-line-number="23" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="701493" _msthash="1812"> * funcionalidad ligada a ellos.</span></div></div></div><div data-key="23" class="react-code-text react-code-line-contents virtual" style="transform: translateY(460px); min-height: auto;"><div><div id="LC24" class="react-file-line html-div" data-testid="code-cell" data-line-number="24" inert="inert" style="position: relative;"><span class="pl-c">   */</span></div></div></div><div data-key="24" class="react-code-text react-code-line-contents virtual" style="transform: translateY(480px); min-height: auto;"><div><div id="LC25" class="react-file-line html-div" data-testid="code-cell" data-line-number="25" inert="inert" style="position: relative;">
</div></div></div><div data-key="25" class="react-code-text react-code-line-contents virtual" style="transform: translateY(500px); min-height: auto;"><div><div id="LC26" class="react-file-line html-div" data-testid="code-cell" data-line-number="26" inert="inert" style="position: relative;">  <span class="pl-k" _msttexthash="60918" _msthash="1813">dejar</span> <span class="pl-s1" _msttexthash="206427" _msthash="1814">liveElements</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span></div></div></div><div data-key="26" class="react-code-text react-code-line-contents virtual" style="transform: translateY(520px); min-height: auto;"><div><div id="LC27" class="react-file-line html-div" data-testid="code-cell" data-line-number="27" inert="inert" style="position: relative;">  <span class="pl-k" _msttexthash="62049" _msthash="1815">Const</span> <span class="pl-s1" _msttexthash="43407" _msthash="1816">cada</span> <span class="pl-c1">=</span> <span class="pl-v" _msttexthash="94575" _msthash="1817">Arreglo</span><span class="pl-kos" _msttexthash="4186" _msthash="1818">.</span><span class="pl-c1" _msttexthash="143858" _msthash="1819">prototipo</span><span class="pl-kos" _msttexthash="4186" _msthash="1820">.</span><span class="pl-c1" _msttexthash="90025" _msthash="1821">forEach</span></div></div></div><div data-key="27" class="react-code-text react-code-line-contents virtual" style="transform: translateY(540px); min-height: auto;"><div><div id="LC28" class="react-file-line html-div" data-testid="code-cell" data-line-number="28" inert="inert" style="position: relative;">
</div></div></div><div data-key="28" class="react-code-text react-code-line-contents virtual" style="transform: translateY(560px); min-height: auto;"><div><div id="LC29" class="react-file-line html-div" data-testid="code-cell" data-line-number="29" inert="inert" style="position: relative;">  <span class="pl-c">/**</span></div></div></div><div data-key="29" class="react-code-text react-code-line-contents virtual" style="transform: translateY(580px); min-height: auto;"><div><div id="LC30" class="react-file-line html-div" data-testid="code-cell" data-line-number="30" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1753726" _msthash="1822"> * Función 'ucs2decode' de la biblioteca punycode.js.</span></div></div></div><div data-key="30" class="react-code-text react-code-line-contents virtual" style="transform: translateY(600px); min-height: auto;"><div><div id="LC31" class="react-file-line html-div" data-testid="code-cell" data-line-number="31" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="31" class="react-code-text react-code-line-contents virtual" style="transform: translateY(620px); min-height: auto;"><div><div id="LC32" class="react-file-line html-div" data-testid="code-cell" data-line-number="32" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3227172" _msthash="1823"> * Crea una matriz que contiene los puntos de código decimal de cada Unicode</span></div></div></div><div data-key="32" class="react-code-text react-code-line-contents virtual" style="transform: translateY(640px); min-height: auto;"><div><div id="LC33" class="react-file-line html-div" data-testid="code-cell" data-line-number="33" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2233634" _msthash="1824"> * en la cadena. Si bien JavaScript usa UCS-2 internamente, este</span></div></div></div><div data-key="33" class="react-code-text react-code-line-contents virtual" style="transform: translateY(660px); min-height: auto;"><div><div id="LC34" class="react-file-line html-div" data-testid="code-cell" data-line-number="34" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2766920" _msthash="1825"> * convertirá un par de mitades sustitutas (cada una de las cuales UCS-2</span></div></div></div><div data-key="34" class="react-code-text react-code-line-contents virtual" style="transform: translateY(680px); min-height: auto;"><div><div id="LC35" class="react-file-line html-div" data-testid="code-cell" data-line-number="35" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3941067" _msthash="1826"> * se expone como caracteres separados) en un solo punto de código, que coincide con</span></div></div></div><div data-key="35" class="react-code-text react-code-line-contents virtual" style="transform: translateY(700px); min-height: auto;"><div><div id="LC36" class="react-file-line html-div" data-testid="code-cell" data-line-number="36" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="63167" _msthash="1827">   * UTF-16.</span></div></div></div><div data-key="36" class="react-code-text react-code-line-contents virtual" style="transform: translateY(720px); min-height: auto;"><div><div id="LC37" class="react-file-line html-div" data-testid="code-cell" data-line-number="37" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="37" class="react-code-text react-code-line-contents virtual" style="transform: translateY(740px); min-height: auto;"><div><div id="LC38" class="react-file-line html-div" data-testid="code-cell" data-line-number="38" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="42731" _msthash="1828">@see</span><font _mstmutation="1" _msttexthash="364143" _msthash="1829">     &lt;http://goo.gl/8M09r&gt;</font></span></div></div></div><div data-key="38" class="react-code-text react-code-line-contents virtual" style="transform: translateY(760px); min-height: auto;"><div><div id="LC39" class="react-file-line html-div" data-testid="code-cell" data-line-number="39" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="42731" _msthash="1830">@see</span><font _mstmutation="1" _msttexthash="378872" _msthash="1831">     &lt;http://goo.gl/u4UUC&gt;</font></span></div></div></div><div data-key="39" class="react-code-text react-code-line-contents virtual" style="transform: translateY(780px); min-height: auto;"><div><div id="LC40" class="react-file-line html-div" data-testid="code-cell" data-line-number="40" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="40" class="react-code-text react-code-line-contents virtual" style="transform: translateY(800px); min-height: auto;"><div><div id="LC41" class="react-file-line html-div" data-testid="code-cell" data-line-number="41" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="74516" _msthash="1832">@param</span>   {<span class="pl-smi" _msttexthash="74334" _msthash="1833">Cuerda</span><font _mstmutation="1" _msttexthash="1155154" _msthash="1834">} string La cadena de entrada Unicode (UCS-2).</font></span></div></div></div><div data-key="41" class="react-code-text react-code-line-contents virtual" style="transform: translateY(820px); min-height: auto;"><div><div id="LC42" class="react-file-line html-div" data-testid="code-cell" data-line-number="42" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="42" class="react-code-text react-code-line-contents virtual" style="transform: translateY(840px); min-height: auto;"><div><div id="LC43" class="react-file-line html-div" data-testid="code-cell" data-line-number="43" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="97682" _msthash="1835">@return</span>  {<span class="pl-smi" _msttexthash="94575" _msthash="1836">Arreglo</span><font _mstmutation="1" _msttexthash="976690" _msthash="1837">} La nueva matriz de puntos de código.</font></span></div></div></div><div data-key="43" class="react-code-text react-code-line-contents virtual" style="transform: translateY(860px); min-height: auto;"><div><div id="LC44" class="react-file-line html-div" data-testid="code-cell" data-line-number="44" inert="inert" style="position: relative;"><span class="pl-c">   */</span></div></div></div><div data-key="44" class="react-code-text react-code-line-contents virtual" style="transform: translateY(880px); min-height: auto;"><div><div id="LC45" class="react-file-line html-div" data-testid="code-cell" data-line-number="45" inert="inert" style="position: relative;">
</div></div></div><div data-key="45" class="react-code-text react-code-line-contents virtual" style="transform: translateY(900px); min-height: auto;"><div><div id="LC46" class="react-file-line html-div" data-testid="code-cell" data-line-number="46" inert="inert" style="position: relative;">  <span class="pl-k" _msttexthash="118703" _msthash="1838">función</span> <span class="pl-en" _msttexthash="202891" _msthash="1839">descodificar</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="77246" _msthash="1840">cuerda</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="46" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(920px); min-height: auto;"><div><div id="LC47" class="react-file-line html-div" data-testid="code-cell" data-line-number="47" inert="inert" style="position: relative;">    <span class="pl-k" _msttexthash="62049" _msthash="1841">Const</span> <span class="pl-s1" _msttexthash="76271" _msthash="1842">salida</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span><span class="pl-kos">]</span></div></div></div><div data-key="47" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(940px); min-height: auto;"><div><div id="LC48" class="react-file-line html-div" data-testid="code-cell" data-line-number="48" inert="inert" style="position: relative;">  	<span class="pl-k" _msttexthash="60918" _msthash="1843">dejar</span> <span class="pl-s1" _msttexthash="140764" _msthash="1844">mostrador</span> <span class="pl-c1">=</span> <span class="pl-c1" _msttexthash="4368" _msthash="1845">0</span></div></div></div><div data-key="48" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(960px); min-height: auto;"><div><div id="LC49" class="react-file-line html-div" data-testid="code-cell" data-line-number="49" inert="inert" style="position: relative;">  	<span class="pl-k" _msttexthash="62049" _msthash="1846">Const</span> <span class="pl-s1" _msttexthash="97552" _msthash="1847">largura</span> <span class="pl-c1">=</span> <span class="pl-s1" _msttexthash="77246" _msthash="1848">cuerda</span><span class="pl-kos" _msttexthash="4186" _msthash="1849">.</span><span class="pl-c1" _msttexthash="97552" _msthash="1850">largura</span></div></div></div><div data-key="49" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(980px); min-height: auto;"><div><div id="LC50" class="react-file-line html-div" data-testid="code-cell" data-line-number="50" inert="inert" style="position: relative;">
</div></div></div><div data-key="50" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1000px); min-height: auto;"><div><div id="LC51" class="react-file-line html-div" data-testid="code-cell" data-line-number="51" inert="inert" style="position: relative;">  	<span class="pl-k" _msttexthash="118651" _msthash="1851">mientras</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="140764" _msthash="1852">mostrador</span> <span class="pl-c1">&lt;</span> <span class="pl-s1" _msttexthash="97552" _msthash="1853">largura</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="51" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1020px); min-height: auto;"><div><div id="LC52" class="react-file-line html-div" data-testid="code-cell" data-line-number="52" inert="inert" style="position: relative;">  		<span class="pl-k" _msttexthash="62049" _msthash="1854">Const</span> <span class="pl-s1" _msttexthash="64194" _msthash="1855">valor</span> <span class="pl-c1">=</span> <span class="pl-s1" _msttexthash="77246" _msthash="1856">cuerda</span><span class="pl-kos" _msttexthash="4186" _msthash="1857">.</span><span class="pl-en" _msttexthash="144976" _msthash="1858">charCodeAt</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="140764" _msthash="1859">mostrador</span><span class="pl-c1">++</span><span class="pl-kos">)</span></div></div></div><div data-key="52" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1040px); min-height: auto;"><div><div id="LC53" class="react-file-line html-div" data-testid="code-cell" data-line-number="53" inert="inert" style="position: relative;">
</div></div></div><div data-key="53" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1060px); min-height: auto;"><div><div id="LC54" class="react-file-line html-div" data-testid="code-cell" data-line-number="54" inert="inert" style="position: relative;">  		<span class="pl-k" _msttexthash="21385" _msthash="1860">si</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="64194" _msthash="1861">valor</span> <span class="pl-c1">&gt;=</span> <span class="pl-c1" _msttexthash="46436" _msthash="1862">0xD800</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1" _msttexthash="64194" _msthash="1863">valor</span> <span class="pl-c1">&lt;=</span> <span class="pl-c1" _msttexthash="54314" _msthash="1864">0xDBFF</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1" _msttexthash="140764" _msthash="1865">mostrador</span> <span class="pl-c1">&lt;</span> <span class="pl-s1" _msttexthash="97552" _msthash="1866">largura</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="54" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1080px); min-height: auto;"><div><div id="LC55" class="react-file-line html-div" data-testid="code-cell" data-line-number="55" inert="inert" style="position: relative;">
</div></div></div><div data-key="55" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1100px); min-height: auto;"><div><div id="LC56" class="react-file-line html-div" data-testid="code-cell" data-line-number="56" inert="inert" style="position: relative;">  			<span class="pl-c" _msttexthash="1644799" _msthash="1867">Es un sustituto alto, y hay un siguiente personaje.</span></div></div></div><div data-key="56" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1120px); min-height: auto;"><div><div id="LC57" class="react-file-line html-div" data-testid="code-cell" data-line-number="57" inert="inert" style="position: relative;">
</div></div></div><div data-key="57" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1140px); min-height: auto;"><div><div id="LC58" class="react-file-line html-div" data-testid="code-cell" data-line-number="58" inert="inert" style="position: relative;">  			<span class="pl-k" _msttexthash="62049" _msthash="1868">Const</span> <span class="pl-s1" _msttexthash="63934" _msthash="1869">extra</span> <span class="pl-c1">=</span> <span class="pl-s1" _msttexthash="77246" _msthash="1870">cuerda</span><span class="pl-kos" _msttexthash="4186" _msthash="1871">.</span><span class="pl-en" _msttexthash="144976" _msthash="1872">charCodeAt</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="140764" _msthash="1873">mostrador</span><span class="pl-c1">++</span><span class="pl-kos">)</span></div></div></div><div data-key="58" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1160px); min-height: auto;"><div><div id="LC59" class="react-file-line html-div" data-testid="code-cell" data-line-number="59" inert="inert" style="position: relative;">
</div></div></div><div data-key="59" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1180px); min-height: auto;"><div><div id="LC60" class="react-file-line html-div" data-testid="code-cell" data-line-number="60" inert="inert" style="position: relative;">  			<span class="pl-k" _msttexthash="21385" _msthash="1874">si</span> <span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="63934" _msthash="1875">extra</span> <span class="pl-c1">&amp;</span> <span class="pl-c1" _msttexthash="48100" _msthash="1876">0xFC00</span><span class="pl-kos">)</span> <span class="pl-c1">==</span> <span class="pl-c1" _msttexthash="47866" _msthash="1877">0xDC00</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-c" _msttexthash="249899" _msthash="1878">Sustituto bajo.</span></div></div></div><div data-key="60" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1200px); min-height: auto;"><div><div id="LC61" class="react-file-line html-div" data-testid="code-cell" data-line-number="61" inert="inert" style="position: relative;">  				<span class="pl-s1" _msttexthash="76271" _msthash="1879">salida</span><span class="pl-kos" _msttexthash="4186" _msthash="1880">.</span><span class="pl-en" _msttexthash="98397" _msthash="1881">empujar</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="64194" _msthash="1882">valor</span> <span class="pl-c1">&amp;</span> <span class="pl-c1" _msttexthash="41925" _msthash="1883">0x3FF</span><span class="pl-kos">)</span> <span class="pl-c1">&lt;&lt;</span> <span class="pl-c1" _msttexthash="9451" _msthash="1884">10</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="63934" _msthash="1885">extra</span> <span class="pl-c1">&amp;</span> <span class="pl-c1" _msttexthash="41925" _msthash="1886">0x3FF</span><span class="pl-kos">)</span> <span class="pl-c1">+</span> <span class="pl-c1" _msttexthash="51285" _msthash="1887">0x10000</span><span class="pl-kos">)</span></div></div></div><div data-key="61" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1220px); min-height: auto;"><div><div id="LC62" class="react-file-line html-div" data-testid="code-cell" data-line-number="62" inert="inert" style="position: relative;">  			<span class="pl-kos">}</span> <span class="pl-k" _msttexthash="46774" _msthash="1888">más</span> <span class="pl-kos">{</span></div></div></div><div data-key="62" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1240px); min-height: auto;"><div><div id="LC63" class="react-file-line html-div" data-testid="code-cell" data-line-number="63" inert="inert" style="position: relative;">
</div></div></div><div data-key="63" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1260px); min-height: auto;"><div><div id="LC64" class="react-file-line html-div" data-testid="code-cell" data-line-number="64" inert="inert" style="position: relative;">  				<span class="pl-c" _msttexthash="4302311" _msthash="1889">Es un sustituto inigualable; anexe únicamente esta unidad de código, en caso de que el</span></div></div></div><div data-key="64" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1280px); min-height: auto;"><div><div id="LC65" class="react-file-line html-div" data-testid="code-cell" data-line-number="65" inert="inert" style="position: relative;">  				<span class="pl-c" _msttexthash="2788136" _msthash="1890">La siguiente unidad de código es el suplente alto de un par suplente.</span></div></div></div><div data-key="65" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1300px); min-height: auto;"><div><div id="LC66" class="react-file-line html-div" data-testid="code-cell" data-line-number="66" inert="inert" style="position: relative;">
</div></div></div><div data-key="66" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1320px); min-height: auto;"><div><div id="LC67" class="react-file-line html-div" data-testid="code-cell" data-line-number="67" inert="inert" style="position: relative;">  				<span class="pl-s1" _msttexthash="76271" _msthash="1891">salida</span><span class="pl-kos" _msttexthash="4186" _msthash="1892">.</span><span class="pl-en" _msttexthash="98397" _msthash="1893">empujar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="64194" _msthash="1894">valor</span><span class="pl-kos">)</span></div></div></div><div data-key="67" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1340px); min-height: auto;"><div><div id="LC68" class="react-file-line html-div" data-testid="code-cell" data-line-number="68" inert="inert" style="position: relative;">  				<span class="pl-s1" _msttexthash="140764" _msthash="1895">mostrador</span><span class="pl-c1">--</span></div></div></div><div data-key="68" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1360px); min-height: auto;"><div><div id="LC69" class="react-file-line html-div" data-testid="code-cell" data-line-number="69" inert="inert" style="position: relative;">  			<span class="pl-kos">}</span></div></div></div><div data-key="69" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1380px); min-height: auto;"><div><div id="LC70" class="react-file-line html-div" data-testid="code-cell" data-line-number="70" inert="inert" style="position: relative;">  		<span class="pl-kos">}</span> <span class="pl-k" _msttexthash="46774" _msthash="1896">más</span> <span class="pl-kos">{</span></div></div></div><div data-key="70" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1400px); min-height: auto;"><div><div id="LC71" class="react-file-line html-div" data-testid="code-cell" data-line-number="71" inert="inert" style="position: relative;">  			<span class="pl-s1" _msttexthash="76271" _msthash="1897">salida</span><span class="pl-kos" _msttexthash="4186" _msthash="1898">.</span><span class="pl-en" _msttexthash="98397" _msthash="1899">empujar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="64194" _msthash="1900">valor</span><span class="pl-kos">)</span></div></div></div><div data-key="71" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1420px); min-height: auto;"><div><div id="LC72" class="react-file-line html-div" data-testid="code-cell" data-line-number="72" inert="inert" style="position: relative;">  		<span class="pl-kos">}</span></div></div></div><div data-key="72" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1440px); min-height: auto;"><div><div id="LC73" class="react-file-line html-div" data-testid="code-cell" data-line-number="73" inert="inert" style="position: relative;">  	<span class="pl-kos">}</span></div></div></div><div data-key="73" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1460px); min-height: auto;"><div><div id="LC74" class="react-file-line html-div" data-testid="code-cell" data-line-number="74" inert="inert" style="position: relative;">
</div></div></div><div data-key="74" class="child-of-line-45  react-code-text react-code-line-contents virtual" style="transform: translateY(1480px); min-height: auto;"><div><div id="LC75" class="react-file-line html-div" data-testid="code-cell" data-line-number="75" inert="inert" style="position: relative;">  	<span class="pl-k" _msttexthash="187642" _msthash="1901">devolución</span> <span class="pl-s1" _msttexthash="76271" _msthash="1902">salida</span></div></div></div><div data-key="105" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2100px); min-height: auto;"><div><div id="LC106" class="react-file-line html-div" data-testid="code-cell" data-line-number="106" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3204084" _msthash="1576"> * Párrafos, oraciones, palabras, caracteres y caracteres más espacios.</span></div></div></div><div data-key="106" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2120px); min-height: auto;"><div><div id="LC107" class="react-file-line html-div" data-testid="code-cell" data-line-number="107" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="107" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2140px); min-height: auto;"><div><div id="LC108" class="react-file-line html-div" data-testid="code-cell" data-line-number="108" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="114452" _msthash="1575">@private</span></span></div></div></div><div data-key="108" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2160px); min-height: auto;"><div><div id="LC109" class="react-file-line html-div" data-testid="code-cell" data-line-number="109" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="109" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2180px); min-height: auto;"><div><div id="LC110" class="react-file-line html-div" data-testid="code-cell" data-line-number="110" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="74516" _msthash="1572">@param</span>   {<span class="pl-smi" _msttexthash="175578" _msthash="1573">Nodo|Cuerda</span><font _mstmutation="1" _msttexthash="771641" _msthash="1574">} target El destino del recuento.</font></span></div></div></div><div data-key="110" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2200px); min-height: auto;"><div><div id="LC111" class="react-file-line html-div" data-testid="code-cell" data-line-number="111" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="111" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2220px); min-height: auto;"><div><div id="LC112" class="react-file-line html-div" data-testid="code-cell" data-line-number="112" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="74516" _msthash="1569">@param</span>   {<span class="pl-smi" _msttexthash="76817" _msthash="1570">Objeto</span><font _mstmutation="1" _msttexthash="1310998" _msthash="1571">} opciones Las opciones a usar para el conteo.</font></span></div></div></div><div data-key="112" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2240px); min-height: auto;"><div><div id="LC113" class="react-file-line html-div" data-testid="code-cell" data-line-number="113" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="113" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2260px); min-height: auto;"><div><div id="LC114" class="react-file-line html-div" data-testid="code-cell" data-line-number="114" inert="inert" style="position: relative;"><span class="pl-c">   * <span class="pl-k" _msttexthash="97682" _msthash="1566">@return</span>  {<span class="pl-smi" _msttexthash="76817" _msthash="1567">Objeto</span><font _mstmutation="1" _msttexthash="1491776" _msthash="1568">} El objeto que contiene el número de párrafos,</font></span></div></div></div><div data-key="114" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2280px); min-height: auto;"><div><div id="LC115" class="react-file-line html-div" data-testid="code-cell" data-line-number="115" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1301924" _msthash="1565"> * frases, palabras, caracteres y caracteres</span></div></div></div><div data-key="115" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2300px); min-height: auto;"><div><div id="LC116" class="react-file-line html-div" data-testid="code-cell" data-line-number="116" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="226018" _msthash="1564"> * Más espacios.</span></div></div></div><div data-key="116" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2320px); min-height: auto;"><div><div id="LC117" class="react-file-line html-div" data-testid="code-cell" data-line-number="117" inert="inert" style="position: relative;"><span class="pl-c">   */</span></div></div></div><div data-key="117" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2340px); min-height: auto;"><div><div id="LC118" class="react-file-line html-div" data-testid="code-cell" data-line-number="118" inert="inert" style="position: relative;">
</div></div></div><div data-key="118" class="react-code-text react-code-line-contents virtual" style="transform: translateY(2360px); min-height: auto;"><div><div id="LC119" class="react-file-line html-div" data-testid="code-cell" data-line-number="119" inert="inert" style="position: relative;">  <span class="pl-k" _msttexthash="118703" _msthash="1559">función</span> <span class="pl-en" _msttexthash="80158" _msthash="1560">contar</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="77272" _msthash="1561">blanco</span><span class="pl-kos" _msttexthash="4004" _msthash="1562">,</span> <span class="pl-s1" _msttexthash="115102" _msthash="1563">Opciones</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="119" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2380px); min-height: auto;"><div><div id="LC120" class="react-file-line html-div" data-testid="code-cell" data-line-number="120" inert="inert" style="position: relative;">    <span class="pl-k" _msttexthash="60918" _msthash="1540">dejar</span> <span class="pl-s1" _msttexthash="290732" _msthash="1541">Texto original en</span> <span class="pl-c1">=</span> <span class="pl-s">''</span> <span class="pl-c1">+</span> <span class="pl-kos">(</span><span class="pl-k" _msttexthash="79066" _msthash="1542">tipode</span> <span class="pl-s1" _msttexthash="77272" _msthash="1543">blanco</span> <span class="pl-c1">===</span> <span class="pl-s" _msttexthash="93288" _msthash="1544">'cadena'</span><font _mstmutation="1" _msttexthash="5733" _msthash="1545"> ? </font><span class="pl-s1" _msttexthash="77272" _msthash="1546">blanco</span><font _mstmutation="1" _msttexthash="5278" _msthash="1547"> : </font><span class="pl-kos">(</span><span class="pl-s" _msttexthash="78130" _msthash="1548">'Valor'</span> <span class="pl-k" _msttexthash="20631" _msthash="1549">en</span> <span class="pl-s1" _msttexthash="77272" _msthash="1550">blanco</span><font _mstmutation="1" _msttexthash="5733" _msthash="1551"> ? </font><span class="pl-s1" _msttexthash="77272" _msthash="1552">blanco</span><span class="pl-kos" _msttexthash="4186" _msthash="1553">.</span><span class="pl-c1" _msttexthash="64194" _msthash="1554">valor</span><font _mstmutation="1" _msttexthash="5278" _msthash="1555"> : </font><span class="pl-s1" _msttexthash="77272" _msthash="1556">blanco</span><span class="pl-kos" _msttexthash="4186" _msthash="1557">.</span><span class="pl-c1" _msttexthash="184990" _msthash="1558">textContent</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></div></div><div data-key="120" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2400px); min-height: auto;"><div><div id="LC121" class="react-file-line html-div" data-testid="code-cell" data-line-number="121" inert="inert" style="position: relative;">    <span class="pl-s1" _msttexthash="115102" _msthash="1537">Opciones</span> <span class="pl-c1">=</span> <span class="pl-s1" _msttexthash="115102" _msthash="1538">Opciones</span> <span class="pl-c1" _msttexthash="24180" _msthash="1539">||</span> <span class="pl-kos">{</span><span class="pl-kos">}</span></div></div></div><div data-key="121" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2420px); min-height: auto;"><div><div id="LC122" class="react-file-line html-div" data-testid="code-cell" data-line-number="122" inert="inert" style="position: relative;">
</div></div></div><div data-key="122" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2440px); min-height: auto;"><div><div id="LC123" class="react-file-line html-div" data-testid="code-cell" data-line-number="123" inert="inert" style="position: relative;">    <span class="pl-c">/**</span></div></div></div><div data-key="123" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2460px); min-height: auto;"><div><div id="LC124" class="react-file-line html-div" data-testid="code-cell" data-line-number="124" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="4072549" _msthash="2186"> * Se creó la implementación inicial para permitir la eliminación de etiquetas HTML</span></div></div></div><div data-key="124" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2480px); min-height: auto;"><div><div id="LC125" class="react-file-line html-div" data-testid="code-cell" data-line-number="125" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="239460" _msthash="2205">@craniumslows</span><font _mstmutation="1" _msttexthash="1257815" _msthash="2206"> mientras que el actual fue creado por @Rob--W.</font></span></div></div></div><div data-key="125" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2500px); min-height: auto;"><div><div id="LC126" class="react-file-line html-div" data-testid="code-cell" data-line-number="126" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="126" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2520px); min-height: auto;"><div><div id="LC127" class="react-file-line html-div" data-testid="code-cell" data-line-number="127" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="42731" _msthash="2203">@see</span><font _mstmutation="1" _msttexthash="416325" _msthash="2204"> &lt;http://goo.gl/Exmlr&gt;</font></span></div></div></div><div data-key="127" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2540px); min-height: auto;"><div><div id="LC128" class="react-file-line html-div" data-testid="code-cell" data-line-number="128" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="42731" _msthash="2201">@see</span><font _mstmutation="1" _msttexthash="390208" _msthash="2202"> &lt;http://goo.gl/gFQQh&gt;</font></span></div></div></div><div data-key="128" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2560px); min-height: auto;"><div><div id="LC129" class="react-file-line html-div" data-testid="code-cell" data-line-number="129" inert="inert" style="position: relative;"><span class="pl-c">     */</span></div></div></div><div data-key="129" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2580px); min-height: auto;"><div><div id="LC130" class="react-file-line html-div" data-testid="code-cell" data-line-number="130" inert="inert" style="position: relative;">
</div></div></div><div data-key="130" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2600px); min-height: auto;"><div><div id="LC131" class="react-file-line html-div" data-testid="code-cell" data-line-number="131" inert="inert" style="position: relative;">    <span class="pl-k" _msttexthash="21385" _msthash="2188">si</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="115102" _msthash="2189">Opciones</span><span class="pl-kos" _msttexthash="4186" _msthash="2190">.</span><span class="pl-c1" _msttexthash="136201" _msthash="2191">stripTags</span><span class="pl-kos">)</span> <span class="pl-s1" _msttexthash="290732" _msthash="2192">Texto original en</span> <span class="pl-c1">=</span> <span class="pl-s1" _msttexthash="290732" _msthash="2193">Texto original en</span><span class="pl-kos" _msttexthash="4186" _msthash="2194">.</span><span class="pl-en" _msttexthash="160953" _msthash="2195">reemplazar</span><span class="pl-kos">(</span><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-s">&lt;</span><span class="pl-cce">\/</span><span class="pl-c1" _msttexthash="5733" _msthash="2196">?</span><span class="pl-kos">[</span><span class="pl-c1" _msttexthash="22087" _msthash="2197">un</span><span class="pl-c1">-</span><span class="pl-c1" _msttexthash="11102" _msthash="2198">z</span><span class="pl-kos">]</span><span class="pl-kos">[</span><span class="pl-c1">^</span><span class="pl-c1">&gt;</span><span class="pl-kos">]</span><span class="pl-c1">*</span><span class="pl-s">&gt;</span><span class="pl-c1">/</span><font _mstmutation="1" _msttexthash="17381" _msthash="2199">Gi</font></span><span class="pl-kos" _msttexthash="4004" _msthash="2200">,</span> <span class="pl-s">''</span><span class="pl-kos">)</span></div></div></div><div data-key="131" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2620px); min-height: auto;"><div><div id="LC132" class="react-file-line html-div" data-testid="code-cell" data-line-number="132" inert="inert" style="position: relative;">
</div></div></div><div data-key="132" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2640px); min-height: auto;"><div><div id="LC133" class="react-file-line html-div" data-testid="code-cell" data-line-number="133" inert="inert" style="position: relative;">    <span class="pl-k" _msttexthash="21385" _msthash="2235">si</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="115102" _msthash="2236">Opciones</span><span class="pl-kos" _msttexthash="4186" _msthash="2237">.</span><span class="pl-c1" _msttexthash="98267" _msthash="2238">ignorar</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="133" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2660px); min-height: auto;"><div><div id="LC134" class="react-file-line html-div" data-testid="code-cell" data-line-number="134" inert="inert" style="position: relative;">        <span class="pl-s1" _msttexthash="43407" _msthash="2226">cada</span><span class="pl-kos" _msttexthash="4186" _msthash="2227">.</span><span class="pl-en" _msttexthash="78234" _msthash="2228">llamar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="115102" _msthash="2229">Opciones</span><span class="pl-kos" _msttexthash="4186" _msthash="2230">.</span><span class="pl-c1" _msttexthash="98267" _msthash="2231">ignorar</span><span class="pl-kos" _msttexthash="4004" _msthash="2232">,</span> <span class="pl-k" _msttexthash="118703" _msthash="2233">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="19643" _msthash="2234">Yo</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="134" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2680px); min-height: auto;"><div><div id="LC135" class="react-file-line html-div" data-testid="code-cell" data-line-number="135" inert="inert" style="position: relative;">            <span class="pl-s1" _msttexthash="290732" _msthash="2220">Texto original en</span> <span class="pl-c1">=</span> <span class="pl-s1" _msttexthash="290732" _msthash="2221">Texto original en</span><span class="pl-kos" _msttexthash="4186" _msthash="2222">.</span><span class="pl-en" _msttexthash="160953" _msthash="2223">reemplazar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="19643" _msthash="2224">Yo</span><span class="pl-kos" _msttexthash="4004" _msthash="2225">,</span> <span class="pl-s">''</span><span class="pl-kos">)</span></div></div></div><div data-key="135" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2700px); min-height: auto;"><div><div id="LC136" class="react-file-line html-div" data-testid="code-cell" data-line-number="136" inert="inert" style="position: relative;">        <span class="pl-kos">}</span><span class="pl-kos">)</span></div></div></div><div data-key="136" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2720px); min-height: auto;"><div><div id="LC137" class="react-file-line html-div" data-testid="code-cell" data-line-number="137" inert="inert" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="137" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2740px); min-height: auto;"><div><div id="LC138" class="react-file-line html-div" data-testid="code-cell" data-line-number="138" inert="inert" style="position: relative;">
</div></div></div><div data-key="138" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2760px); min-height: auto;"><div><div id="LC139" class="react-file-line html-div" data-testid="code-cell" data-line-number="139" inert="inert" style="position: relative;">    <span class="pl-k" _msttexthash="62049" _msthash="2215">Const</span> <span class="pl-s1" _msttexthash="137527" _msthash="2216">recortado</span> <span class="pl-c1">=</span> <span class="pl-s1" _msttexthash="290732" _msthash="2217">Texto original en</span><span class="pl-kos" _msttexthash="4186" _msthash="2218">.</span><span class="pl-en" _msttexthash="118430" _msthash="2219">recortar</span><span class="pl-kos">(</span><span class="pl-kos">)</span></div></div></div><div data-key="139" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2780px); min-height: auto;"><div><div id="LC140" class="react-file-line html-div" data-testid="code-cell" data-line-number="140" inert="inert" style="position: relative;">
</div></div></div><div data-key="140" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2800px); min-height: auto;"><div><div id="LC141" class="react-file-line html-div" data-testid="code-cell" data-line-number="141" inert="inert" style="position: relative;">    <span class="pl-c">/**</span></div></div></div><div data-key="141" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2820px); min-height: auto;"><div><div id="LC142" class="react-file-line html-div" data-testid="code-cell" data-line-number="142" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3549871" _msthash="2248"> * La mayoría de las mejoras de rendimiento se basan en los trabajos de @epmatsw.</span></div></div></div><div data-key="142" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2840px); min-height: auto;"><div><div id="LC143" class="react-file-line html-div" data-testid="code-cell" data-line-number="143" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="143" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2860px); min-height: auto;"><div><div id="LC144" class="react-file-line html-div" data-testid="code-cell" data-line-number="144" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="42731" _msthash="2251">@see</span><font _mstmutation="1" _msttexthash="374478" _msthash="2252"> &lt;http://goo.gl/SWOLB&gt;</font></span></div></div></div><div data-key="144" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2880px); min-height: auto;"><div><div id="LC145" class="react-file-line html-div" data-testid="code-cell" data-line-number="145" inert="inert" style="position: relative;"><span class="pl-c">     */</span></div></div></div><div data-key="145" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2900px); min-height: auto;"><div><div id="LC146" class="react-file-line html-div" data-testid="code-cell" data-line-number="146" inert="inert" style="position: relative;">
</div></div></div><div data-key="146" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2920px); min-height: auto;"><div><div id="LC147" class="react-file-line html-div" data-testid="code-cell" data-line-number="147" inert="inert" style="position: relative;">    <span class="pl-k" _msttexthash="187642" _msthash="2254">devolución</span> <span class="pl-kos">{</span></div></div></div><div data-key="147" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2940px); min-height: auto;"><div><div id="LC148" class="react-file-line html-div" data-testid="code-cell" data-line-number="148" inert="inert" style="position: relative;">      <span class="pl-c1" _msttexthash="128310" _msthash="2325">Párrafos</span><font _mstmutation="1" _msttexthash="5278" _msthash="2326">: </font><span class="pl-s1" _msttexthash="137527" _msthash="2327">recortado</span><font _mstmutation="1" _msttexthash="5733" _msthash="2328"> ? </font><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137527" _msthash="2329">recortado</span><span class="pl-kos" _msttexthash="4186" _msthash="2330">.</span><span class="pl-en" _msttexthash="95186" _msthash="2331">cerilla</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="115102" _msthash="2332">Opciones</span><span class="pl-kos" _msttexthash="4186" _msthash="2333">.</span><span class="pl-c1" _msttexthash="184795" _msthash="2334">hardReturns</span><font _mstmutation="1" _msttexthash="5733" _msthash="2335"> ? </font><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-cce" _msttexthash="19812" _msthash="2336">\n</span><span class="pl-kos">{</span><span class="pl-c1" _msttexthash="4550" _msthash="2337">2</span><span class="pl-kos" _msttexthash="4004" _msthash="2338">,</span><span class="pl-kos">}</span><span class="pl-c1">/</span><font _mstmutation="1" _msttexthash="9373" _msthash="2339">g</font></span><font _mstmutation="1" _msttexthash="5278" _msthash="2340"> : </font><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-cce" _msttexthash="19812" _msthash="2341">\n</span><span class="pl-c1">+</span><span class="pl-c1">/</span><font _mstmutation="1" _msttexthash="9373" _msthash="2342">g</font></span><span class="pl-kos">)</span> <span class="pl-c1" _msttexthash="24180" _msthash="2343">||</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos" _msttexthash="4186" _msthash="2344">.</span><span class="pl-c1" _msttexthash="97552" _msthash="2345">largura</span> <span class="pl-c1">+</span> <span class="pl-c1" _msttexthash="4459" _msthash="2346">1</span><font _mstmutation="1" _msttexthash="5278" _msthash="2347"> : </font><span class="pl-c1" _msttexthash="4368" _msthash="2348">0</span><span class="pl-kos" _msttexthash="4004" _msthash="2349">,</span></div></div></div><div data-key="148" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2960px); min-height: auto;"><div><div id="LC149" class="react-file-line html-div" data-testid="code-cell" data-line-number="149" inert="inert" style="position: relative;">      <span class="pl-c1" _msttexthash="134992" _msthash="2306">Oraciones</span><font _mstmutation="1" _msttexthash="5278" _msthash="2307">: </font><span class="pl-s1" _msttexthash="137527" _msthash="2308">recortado</span><font _mstmutation="1" _msttexthash="5733" _msthash="2309"> ? </font><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137527" _msthash="2310">recortado</span><span class="pl-kos" _msttexthash="4186" _msthash="2311">.</span><span class="pl-en" _msttexthash="95186" _msthash="2312">cerilla</span><span class="pl-kos">(</span><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-kos">[</span><span class="pl-c1" _msttexthash="4186" _msthash="2313">.</span><span class="pl-c1" _msttexthash="5733" _msthash="2314">?</span><span class="pl-c1" _msttexthash="3003" _msthash="2315">!</span><span class="pl-c1" _msttexthash="748930" _msthash="2316">…</span><span class="pl-kos">]</span><span class="pl-c1">+</span><font _mstmutation="1" _msttexthash="14898" _msthash="2317">.g</font><span class="pl-c1">/</span></span><span class="pl-kos">)</span> <span class="pl-c1" _msttexthash="24180" _msthash="2318">||</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos" _msttexthash="4186" _msthash="2319">.</span><span class="pl-c1" _msttexthash="97552" _msthash="2320">largura</span> <span class="pl-c1">+</span> <span class="pl-c1" _msttexthash="4459" _msthash="2321">1</span><font _mstmutation="1" _msttexthash="5278" _msthash="2322"> : </font><span class="pl-c1" _msttexthash="4368" _msthash="2323">0</span><span class="pl-kos" _msttexthash="4004" _msthash="2324">,</span></div></div></div><div data-key="149" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(2980px); min-height: auto;"><div><div id="LC150" class="react-file-line html-div" data-testid="code-cell" data-line-number="150" inert="inert" style="position: relative;">      <span class="pl-c1" _msttexthash="114647" _msthash="2280">palabras</span><font _mstmutation="1" _msttexthash="5278" _msthash="2281">: </font><span class="pl-s1" _msttexthash="137527" _msthash="2282">recortado</span><font _mstmutation="1" _msttexthash="5733" _msthash="2283"> ? </font><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137527" _msthash="2284">recortado</span><span class="pl-kos" _msttexthash="4186" _msthash="2285">.</span><span class="pl-en" _msttexthash="160953" _msthash="2286">reemplazar</span><span class="pl-kos">(</span><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-kos">[</span><span class="pl-c1">'</span><span class="pl-c1">"</span><span class="pl-c1">;</span><span class="pl-c1" _msttexthash="5278" _msthash="2287">:</span><span class="pl-c1" _msttexthash="4004" _msthash="2288">,</span><span class="pl-c1" _msttexthash="4186" _msthash="2289">.</span><span class="pl-c1" _msttexthash="5733" _msthash="2290">?</span><span class="pl-c1" _msttexthash="17381" _msthash="2291">¿</span><span class="pl-cce">\-</span><span class="pl-c1" _msttexthash="3003" _msthash="2292">!</span><span class="pl-c1" _msttexthash="14651" _msthash="2293">¡</span><span class="pl-kos">]</span><span class="pl-c1">+</span><span class="pl-c1">/</span><font _mstmutation="1" _msttexthash="9373" _msthash="2294">g</font></span><span class="pl-kos" _msttexthash="4004" _msthash="2295">,</span> <span class="pl-s">''</span><span class="pl-kos">)</span><span class="pl-kos" _msttexthash="4186" _msthash="2296">.</span><span class="pl-en" _msttexthash="95186" _msthash="2297">cerilla</span><span class="pl-kos">(</span><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-cce" _msttexthash="17004" _msthash="2298">\S</span><span class="pl-c1">+</span><span class="pl-c1">/</span><font _mstmutation="1" _msttexthash="9373" _msthash="2299">g</font></span><span class="pl-kos">)</span> <span class="pl-c1" _msttexthash="24180" _msthash="2300">||</span> <span class="pl-kos">[</span><span class="pl-kos">]</span><span class="pl-kos">)</span><span class="pl-kos" _msttexthash="4186" _msthash="2301">.</span><span class="pl-c1" _msttexthash="97552" _msthash="2302">largura</span><font _mstmutation="1" _msttexthash="5278" _msthash="2303"> : </font><span class="pl-c1" _msttexthash="4368" _msthash="2304">0</span><span class="pl-kos" _msttexthash="4004" _msthash="2305">,</span></div></div></div><div data-key="150" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(3000px); min-height: auto;"><div><div id="LC151" class="react-file-line html-div" data-testid="code-cell" data-line-number="151" inert="inert" style="position: relative;">      <span class="pl-c1" _msttexthash="155818" _msthash="2264">Caracteres</span><font _mstmutation="1" _msttexthash="5278" _msthash="2265">: </font><span class="pl-s1" _msttexthash="137527" _msthash="2266">recortado</span><font _mstmutation="1" _msttexthash="5733" _msthash="2267"> ? </font><span class="pl-en" _msttexthash="202891" _msthash="2268">descodificar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137527" _msthash="2269">recortado</span><span class="pl-kos" _msttexthash="4186" _msthash="2270">.</span><span class="pl-en" _msttexthash="160953" _msthash="2271">reemplazar</span><span class="pl-kos">(</span><span class="pl-pds"><span class="pl-c1">/</span><span class="pl-cce" _msttexthash="20332" _msthash="2272">\s</span><span class="pl-c1">/</span><font _mstmutation="1" _msttexthash="9373" _msthash="2273">g</font></span><span class="pl-kos" _msttexthash="4004" _msthash="2274">,</span> <span class="pl-s">''</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos" _msttexthash="4186" _msthash="2275">.</span><span class="pl-c1" _msttexthash="97552" _msthash="2276">largura</span><font _mstmutation="1" _msttexthash="5278" _msthash="2277"> : </font><span class="pl-c1" _msttexthash="4368" _msthash="2278">0</span><span class="pl-kos" _msttexthash="4004" _msthash="2279">,</span></div></div></div><div data-key="151" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(3020px); min-height: auto;"><div><div id="LC152" class="react-file-line html-div" data-testid="code-cell" data-line-number="152" inert="inert" style="position: relative;">      <span class="pl-c1" _msttexthash="48230" _msthash="2258">todo</span><font _mstmutation="1" _msttexthash="5278" _msthash="2259">: </font><span class="pl-en" _msttexthash="202891" _msthash="2260">descodificar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="290732" _msthash="2261">Texto original en</span><span class="pl-kos">)</span><span class="pl-kos" _msttexthash="4186" _msthash="2262">.</span><span class="pl-c1" _msttexthash="97552" _msthash="2263">largura</span></div></div></div><div data-key="152" class="child-of-line-118  react-code-text react-code-line-contents virtual" style="transform: translateY(3040px); min-height: auto;"><div><div id="LC153" class="react-file-line html-div" data-testid="code-cell" data-line-number="153" inert="inert" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="153" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3060px); min-height: auto;"><div><div id="LC154" class="react-file-line html-div" data-testid="code-cell" data-line-number="154" inert="inert" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="154" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3080px); min-height: auto;"><div><div id="LC155" class="react-file-line html-div" data-testid="code-cell" data-line-number="155" inert="inert" style="position: relative;">
</div></div></div><div data-key="155" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3100px); min-height: auto;"><div><div id="LC156" class="react-file-line html-div" data-testid="code-cell" data-line-number="156" inert="inert" style="position: relative;">  <span class="pl-c">/**</span></div></div></div><div data-key="156" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3120px); min-height: auto;"><div><div id="LC157" class="react-file-line html-div" data-testid="code-cell" data-line-number="157" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3002311" _msthash="2360"> * Este es el objeto principal que luego se expondrá a otros scripts. Eso</span></div></div></div><div data-key="157" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3140px); min-height: auto;"><div><div id="LC158" class="react-file-line html-div" data-testid="code-cell" data-line-number="158" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="4212052" _msthash="2359"> * contiene todos los métodos públicos que se pueden usar para habilitar el Countable</span></div></div></div><div data-key="158" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3160px); min-height: auto;"><div><div id="LC159" class="react-file-line html-div" data-testid="code-cell" data-line-number="159" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="262236" _msthash="2370"> *funcionalidad.</span></div></div></div><div data-key="159" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3180px); min-height: auto;"><div><div id="LC160" class="react-file-line html-div" data-testid="code-cell" data-line-number="160" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="160" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3200px); min-height: auto;"><div><div id="LC161" class="react-file-line html-div" data-testid="code-cell" data-line-number="161" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3554642" _msthash="2369"> * Algunos métodos aceptan un parámetro de opciones opcional. Esto incluye el</span></div></div></div><div data-key="161" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3220px); min-height: auto;"><div><div id="LC162" class="react-file-line html-div" data-testid="code-cell" data-line-number="162" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="434486" _msthash="2368"> * Siguientes opciones.</span></div></div></div><div data-key="162" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3240px); min-height: auto;"><div><div id="LC163" class="react-file-line html-div" data-testid="code-cell" data-line-number="163" inert="inert" style="position: relative;"><span class="pl-c">   *</span></div></div></div><div data-key="163" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3260px); min-height: auto;"><div><div id="LC164" class="react-file-line html-div" data-testid="code-cell" data-line-number="164" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2702700" _msthash="2367"> * {Boolean} hardReturns Usa dos retornos para separar un párrafo</span></div></div></div><div data-key="164" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3280px); min-height: auto;"><div><div id="LC165" class="react-file-line html-div" data-testid="code-cell" data-line-number="165" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1125436" _msthash="2366"> * en lugar de uno. (predeterminado: falso)</span></div></div></div><div data-key="165" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3300px); min-height: auto;"><div><div id="LC166" class="react-file-line html-div" data-testid="code-cell" data-line-number="166" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3318497" _msthash="2365"> * {Boolean} stripTags Quita las etiquetas HTML antes de contar los valores.</span></div></div></div><div data-key="166" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3320px); min-height: auto;"><div><div id="LC167" class="react-file-line html-div" data-testid="code-cell" data-line-number="167" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="521053" _msthash="2364"> * (predeterminado: falso)</span></div></div></div><div data-key="167" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3340px); min-height: auto;"><div><div id="LC168" class="react-file-line html-div" data-testid="code-cell" data-line-number="168" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2798419" _msthash="2363"> * {Array&lt;Char&gt;} ignore Una lista de caracteres que deben eliminarse</span></div></div></div><div data-key="168" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3360px); min-height: auto;"><div><div id="LC169" class="react-file-line html-div" data-testid="code-cell" data-line-number="169" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1016483" _msthash="2381"> * Se ignora al calcular los contadores.</span></div></div></div><div data-key="169" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3380px); min-height: auto;"><div><div id="LC170" class="react-file-line html-div" data-testid="code-cell" data-line-number="170" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="337766" _msthash="2383"> * (predeterminado: )</span></div></div></div><div data-key="170" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3400px); min-height: auto;"><div><div id="LC171" class="react-file-line html-div" data-testid="code-cell" data-line-number="171" inert="inert" style="position: relative;"><span class="pl-c">   */</span></div></div></div><div data-key="171" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3420px); min-height: auto;"><div><div id="LC172" class="react-file-line html-div" data-testid="code-cell" data-line-number="172" inert="inert" style="position: relative;">
</div></div></div><div data-key="172" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3440px); min-height: auto;"><div><div id="LC173" class="react-file-line html-div" data-testid="code-cell" data-line-number="173" inert="inert" style="position: relative;">  <span class="pl-k" _msttexthash="62049" _msthash="2405">Const</span> <span class="pl-v" _msttexthash="111384" _msthash="2406">Contable</span> <span class="pl-c1">=</span> <span class="pl-kos">{</span></div></div></div><div data-key="173" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3460px); min-height: auto;"><div><div id="LC174" class="react-file-line html-div" data-testid="code-cell" data-line-number="174" inert="inert" style="position: relative;">
</div></div></div><div data-key="174" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3480px); min-height: auto;"><div><div id="LC175" class="react-file-line html-div" data-testid="code-cell" data-line-number="175" inert="inert" style="position: relative;">    <span class="pl-c">/**</span></div></div></div><div data-key="175" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3500px); min-height: auto;"><div><div id="LC176" class="react-file-line html-div" data-testid="code-cell" data-line-number="176" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="3633292" _msthash="2404"> * El método 'on' vincula el controlador de conteo a todos los elementos dados. El</span></div></div></div><div data-key="176" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3520px); min-height: auto;"><div><div id="LC177" class="react-file-line html-div" data-testid="code-cell" data-line-number="177" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2282631" _msthash="2403"> * es 'oninput' o 'onkeydown', en función de las capacidades de</span></div></div></div><div data-key="177" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3540px); min-height: auto;"><div><div id="LC178" class="react-file-line html-div" data-testid="code-cell" data-line-number="178" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="208312" _msthash="2402"> * El navegador.</span></div></div></div><div data-key="178" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3560px); min-height: auto;"><div><div id="LC179" class="react-file-line html-div" data-testid="code-cell" data-line-number="179" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="179" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3580px); min-height: auto;"><div><div id="LC180" class="react-file-line html-div" data-testid="code-cell" data-line-number="180" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="74516" _msthash="2399">@param</span>   {<span class="pl-smi" _msttexthash="61217" _msthash="2400">Nodos</span><font _mstmutation="1" _msttexthash="2355743" _msthash="2401">} elementos Todos los elementos que deben recibir el atributo</font></span></div></div></div><div data-key="180" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3600px); min-height: auto;"><div><div id="LC181" class="react-file-line html-div" data-testid="code-cell" data-line-number="181" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="530868" _msthash="2398"> * Funcionalidad contable.</span></div></div></div><div data-key="181" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3620px); min-height: auto;"><div><div id="LC182" class="react-file-line html-div" data-testid="code-cell" data-line-number="182" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="182" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3640px); min-height: auto;"><div><div id="LC183" class="react-file-line html-div" data-testid="code-cell" data-line-number="183" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="74516" _msthash="2395">@param</span>   {<span class="pl-smi" _msttexthash="115791" _msthash="2396">Función</span><font _mstmutation="1" _msttexthash="2520843" _msthash="2397">} callback La devolución de llamada para disparar cada vez que el</font></span></div></div></div><div data-key="183" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3660px); min-height: auto;"><div><div id="LC184" class="react-file-line html-div" data-testid="code-cell" data-line-number="184" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2347618" _msthash="2394"> * Cambios en el valor del elemento. La devolución de llamada es</span></div></div></div><div data-key="184" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3680px); min-height: auto;"><div><div id="LC185" class="react-file-line html-div" data-testid="code-cell" data-line-number="185" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1335048" _msthash="2393"> * llamado con el elemento relevante enlazado</span></div></div></div><div data-key="185" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3700px); min-height: auto;"><div><div id="LC186" class="react-file-line html-div" data-testid="code-cell" data-line-number="186" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1040559" _msthash="2392"> * a 'this' y los valores contados como el</span></div></div></div><div data-key="186" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3720px); min-height: auto;"><div><div id="LC187" class="react-file-line html-div" data-testid="code-cell" data-line-number="187" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="350441" _msthash="2391"> * parámetro único.</span></div></div></div><div data-key="187" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3740px); min-height: auto;"><div><div id="LC188" class="react-file-line html-div" data-testid="code-cell" data-line-number="188" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="188" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3760px); min-height: auto;"><div><div id="LC189" class="react-file-line html-div" data-testid="code-cell" data-line-number="189" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="74516" _msthash="2388">@param</span>   {<span class="pl-smi" _msttexthash="76817" _msthash="2389">Objeto</span><font _mstmutation="1" _msttexthash="1090713" _msthash="2390">} [opciones] Un objeto para modificar el</font></span></div></div></div><div data-key="189" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3780px); min-height: auto;"><div><div id="LC190" class="react-file-line html-div" data-testid="code-cell" data-line-number="190" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="304200" _msthash="2387"> *comportamiento.</span></div></div></div><div data-key="190" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3800px); min-height: auto;"><div><div id="LC191" class="react-file-line html-div" data-testid="code-cell" data-line-number="191" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="191" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3820px); min-height: auto;"><div><div id="LC192" class="react-file-line html-div" data-testid="code-cell" data-line-number="192" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="97682" _msthash="2451">@return</span>  {<span class="pl-smi" _msttexthash="76817" _msthash="2452">Objeto</span><font _mstmutation="1" _msttexthash="2524171" _msthash="2453">} Devuelve el objeto Countable para permitir el encadenamiento.</font></span></div></div></div><div data-key="192" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3840px); min-height: auto;"><div><div id="LC193" class="react-file-line html-div" data-testid="code-cell" data-line-number="193" inert="inert" style="position: relative;"><span class="pl-c">     */</span></div></div></div><div data-key="193" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3860px); min-height: auto;"><div><div id="LC194" class="react-file-line html-div" data-testid="code-cell" data-line-number="194" inert="inert" style="position: relative;">
</div></div></div><div data-key="194" class="react-code-text react-code-line-contents virtual" style="transform: translateY(3880px); min-height: auto;"><div><div id="LC195" class="react-file-line html-div" data-testid="code-cell" data-line-number="195" inert="inert" style="position: relative;">    <span class="pl-en" _msttexthash="20631" _msthash="2443">en</span><font _mstmutation="1" _msttexthash="5278" _msthash="2444">: </font><span class="pl-k" _msttexthash="118703" _msthash="2445">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2446">Elementos</span><span class="pl-kos" _msttexthash="4004" _msthash="2447">,</span> <span class="pl-s1" _msttexthash="108212" _msthash="2448">Callback</span><span class="pl-kos" _msttexthash="4004" _msthash="2449">,</span> <span class="pl-s1" _msttexthash="115102" _msthash="2450">Opciones</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="195" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(3900px); min-height: auto;"><div><div id="LC196" class="react-file-line html-div" data-testid="code-cell" data-line-number="196" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="21385" _msthash="2436">si</span> <span class="pl-kos">(</span><span class="pl-c1" _msttexthash="3003" _msthash="2437">!</span><span class="pl-en" _msttexthash="351832" _msthash="2438">validateArguments</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2439">Elementos</span><span class="pl-kos" _msttexthash="4004" _msthash="2440">,</span> <span class="pl-s1" _msttexthash="108212" _msthash="2441">Callback</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-k" _msttexthash="187642" _msthash="2442">devolución</span></div></div></div><div data-key="196" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(3920px); min-height: auto;"><div><div id="LC197" class="react-file-line html-div" data-testid="code-cell" data-line-number="197" inert="inert" style="position: relative;">
</div></div></div><div data-key="197" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(3940px); min-height: auto;"><div><div id="LC198" class="react-file-line html-div" data-testid="code-cell" data-line-number="198" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="21385" _msthash="2430">si</span> <span class="pl-kos">(</span><span class="pl-c1" _msttexthash="3003" _msthash="2431">!</span><span class="pl-v" _msttexthash="94575" _msthash="2432">Arreglo</span><span class="pl-kos" _msttexthash="4186" _msthash="2433">.</span><span class="pl-en" _msttexthash="95823" _msthash="2434">isArray</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2435">Elementos</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="198" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(3960px); min-height: auto;"><div><div id="LC199" class="react-file-line html-div" data-testid="code-cell" data-line-number="199" inert="inert" style="position: relative;">          <span class="pl-s1" _msttexthash="137332" _msthash="2462">Elementos</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span> <span class="pl-s1" _msttexthash="137332" _msthash="2463">Elementos</span> <span class="pl-kos">]</span></div></div></div><div data-key="199" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(3980px); min-height: auto;"><div><div id="LC200" class="react-file-line html-div" data-testid="code-cell" data-line-number="200" inert="inert" style="position: relative;">      <span class="pl-kos">}</span></div></div></div><div data-key="200" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4000px); min-height: auto;"><div><div id="LC201" class="react-file-line html-div" data-testid="code-cell" data-line-number="201" inert="inert" style="position: relative;">
</div></div></div><div data-key="201" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4020px); min-height: auto;"><div><div id="LC202" class="react-file-line html-div" data-testid="code-cell" data-line-number="202" inert="inert" style="position: relative;">      <span class="pl-s1" _msttexthash="43407" _msthash="2465">cada</span><span class="pl-kos" _msttexthash="4186" _msthash="2466">.</span><span class="pl-en" _msttexthash="78234" _msthash="2467">llamar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2468">Elementos</span><span class="pl-kos" _msttexthash="4004" _msthash="2469">,</span> <span class="pl-k" _msttexthash="118703" _msthash="2470">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2471">e</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="202" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4040px); min-height: auto;"><div><div id="LC203" class="react-file-line html-div" data-testid="code-cell" data-line-number="203" inert="inert" style="position: relative;">          <span class="pl-k" _msttexthash="62049" _msthash="2501">Const</span> <span class="pl-en" _msttexthash="182897" _msthash="2502">Controlador</span> <span class="pl-c1">=</span> <span class="pl-k" _msttexthash="118703" _msthash="2503">función</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="203" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4060px); min-height: auto;"><div><div id="LC204" class="react-file-line html-div" data-testid="code-cell" data-line-number="204" inert="inert" style="position: relative;">            <span class="pl-s1" _msttexthash="108212" _msthash="2492">Callback</span><span class="pl-kos" _msttexthash="4186" _msthash="2493">.</span><span class="pl-en" _msttexthash="78234" _msthash="2494">llamar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2495">e</span><span class="pl-kos" _msttexthash="4004" _msthash="2496">,</span> <span class="pl-en" _msttexthash="80158" _msthash="2497">contar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2498">e</span><span class="pl-kos" _msttexthash="4004" _msthash="2499">,</span> <span class="pl-s1" _msttexthash="115102" _msthash="2500">Opciones</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></div></div><div data-key="204" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4080px); min-height: auto;"><div><div id="LC205" class="react-file-line html-div" data-testid="code-cell" data-line-number="205" inert="inert" style="position: relative;">          <span class="pl-kos">}</span></div></div></div><div data-key="205" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4100px); min-height: auto;"><div><div id="LC206" class="react-file-line html-div" data-testid="code-cell" data-line-number="206" inert="inert" style="position: relative;">
</div></div></div><div data-key="206" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4120px); min-height: auto;"><div><div id="LC207" class="react-file-line html-div" data-testid="code-cell" data-line-number="207" inert="inert" style="position: relative;">          <span class="pl-s1" _msttexthash="206427" _msthash="2482">liveElements</span><span class="pl-kos" _msttexthash="4186" _msthash="2483">.</span><span class="pl-en" _msttexthash="98397" _msthash="2484">empujar</span><span class="pl-kos">(</span><span class="pl-kos">{</span> <span class="pl-c1" _msttexthash="117819" _msthash="2485">elemento</span><font _mstmutation="1" _msttexthash="5278" _msthash="2486">: </font><span class="pl-s1" _msttexthash="9191" _msthash="2487">e</span><span class="pl-kos" _msttexthash="4004" _msthash="2488">,</span> <span class="pl-c1" _msttexthash="182897" _msthash="2489">Controlador</span><font _mstmutation="1" _msttexthash="5278" _msthash="2490">: </font><span class="pl-en" _msttexthash="182897" _msthash="2491">Controlador</span> <span class="pl-kos">}</span><span class="pl-kos">)</span></div></div></div><div data-key="207" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4140px); min-height: auto;"><div><div id="LC208" class="react-file-line html-div" data-testid="code-cell" data-line-number="208" inert="inert" style="position: relative;">
</div></div></div><div data-key="208" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4160px); min-height: auto;"><div><div id="LC209" class="react-file-line html-div" data-testid="code-cell" data-line-number="209" inert="inert" style="position: relative;">          <span class="pl-en" _msttexthash="182897" _msthash="2481">Controlador</span><span class="pl-kos">(</span><span class="pl-kos">)</span></div></div></div><div data-key="209" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4180px); min-height: auto;"><div><div id="LC210" class="react-file-line html-div" data-testid="code-cell" data-line-number="210" inert="inert" style="position: relative;">
</div></div></div><div data-key="210" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4200px); min-height: auto;"><div><div id="LC211" class="react-file-line html-div" data-testid="code-cell" data-line-number="211" inert="inert" style="position: relative;">          <span class="pl-s1" _msttexthash="9191" _msthash="2475">e</span><span class="pl-kos" _msttexthash="4186" _msthash="2476">.</span><span class="pl-en" _msttexthash="315172" _msthash="2477">addEventListener</span><span class="pl-kos">(</span><span class="pl-s" _msttexthash="115596" _msthash="2478">'entrada'</span><span class="pl-kos" _msttexthash="4004" _msthash="2479">,</span> <span class="pl-en" _msttexthash="182897" _msthash="2480">Controlador</span><span class="pl-kos">)</span></div></div></div><div data-key="211" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4220px); min-height: auto;"><div><div id="LC212" class="react-file-line html-div" data-testid="code-cell" data-line-number="212" inert="inert" style="position: relative;">      <span class="pl-kos">}</span><span class="pl-kos">)</span></div></div></div><div data-key="212" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4240px); min-height: auto;"><div><div id="LC213" class="react-file-line html-div" data-testid="code-cell" data-line-number="213" inert="inert" style="position: relative;">
</div></div></div><div data-key="213" class="child-of-line-194  react-code-text react-code-line-contents virtual" style="transform: translateY(4260px); min-height: auto;"><div><div id="LC214" class="react-file-line html-div" data-testid="code-cell" data-line-number="214" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="187642" _msthash="2524">devolución</span> <span class="pl-smi" _msttexthash="59865" _msthash="2525">éste</span></div></div></div><div data-key="214" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4280px); min-height: auto;"><div><div id="LC215" class="react-file-line html-div" data-testid="code-cell" data-line-number="215" inert="inert" style="position: relative;">    <span class="pl-kos">}</span><span class="pl-kos" _msttexthash="4004" _msthash="2523">,</span></div></div></div><div data-key="215" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4300px); min-height: auto;"><div><div id="LC216" class="react-file-line html-div" data-testid="code-cell" data-line-number="216" inert="inert" style="position: relative;">
</div></div></div><div data-key="216" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4320px); min-height: auto;"><div><div id="LC217" class="react-file-line html-div" data-testid="code-cell" data-line-number="217" inert="inert" style="position: relative;">    <span class="pl-c">/**</span></div></div></div><div data-key="217" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4340px); min-height: auto;"><div><div id="LC218" class="react-file-line html-div" data-testid="code-cell" data-line-number="218" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2616861" _msthash="2522"> * El método 'off' elimina la funcionalidad contable de todo lo dado</span></div></div></div><div data-key="218" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4360px); min-height: auto;"><div><div id="LC219" class="react-file-line html-div" data-testid="code-cell" data-line-number="219" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="163540" _msthash="2521"> *Elementos.</span></div></div></div><div data-key="219" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4380px); min-height: auto;"><div><div id="LC220" class="react-file-line html-div" data-testid="code-cell" data-line-number="220" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="220" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4400px); min-height: auto;"><div><div id="LC221" class="react-file-line html-div" data-testid="code-cell" data-line-number="221" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="74516" _msthash="2518">@param</span>   {<span class="pl-smi" _msttexthash="61217" _msthash="2519">Nodos</span><font _mstmutation="1" _msttexthash="2311881" _msthash="2520">} elementos Todos los elementos cuya funcionalidad Contable</font></span></div></div></div><div data-key="221" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4420px); min-height: auto;"><div><div id="LC222" class="react-file-line html-div" data-testid="code-cell" data-line-number="222" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="424320" _msthash="2517"> * debe estar desligado.</span></div></div></div><div data-key="222" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4440px); min-height: auto;"><div><div id="LC223" class="react-file-line html-div" data-testid="code-cell" data-line-number="223" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="223" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4460px); min-height: auto;"><div><div id="LC224" class="react-file-line html-div" data-testid="code-cell" data-line-number="224" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="97682" _msthash="2514">@return</span>  {<span class="pl-smi" _msttexthash="76817" _msthash="2515">Objeto</span><font _mstmutation="1" _msttexthash="2524171" _msthash="2516">} Devuelve el objeto Countable para permitir el encadenamiento.</font></span></div></div></div><div data-key="224" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4480px); min-height: auto;"><div><div id="LC225" class="react-file-line html-div" data-testid="code-cell" data-line-number="225" inert="inert" style="position: relative;"><span class="pl-c">     */</span></div></div></div><div data-key="225" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4500px); min-height: auto;"><div><div id="LC226" class="react-file-line html-div" data-testid="code-cell" data-line-number="226" inert="inert" style="position: relative;">
</div></div></div><div data-key="226" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4520px); min-height: auto;"><div><div id="LC227" class="react-file-line html-div" data-testid="code-cell" data-line-number="227" inert="inert" style="position: relative;">    <span class="pl-en" _msttexthash="93444" _msthash="2547">apagado</span><font _mstmutation="1" _msttexthash="5278" _msthash="2548">: </font><span class="pl-k" _msttexthash="118703" _msthash="2549">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2550">Elementos</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="227" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4540px); min-height: auto;"><div><div id="LC228" class="react-file-line html-div" data-testid="code-cell" data-line-number="228" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="21385" _msthash="2540">si</span> <span class="pl-kos">(</span><span class="pl-c1" _msttexthash="3003" _msthash="2541">!</span><span class="pl-en" _msttexthash="351832" _msthash="2542">validateArguments</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2543">Elementos</span><span class="pl-kos" _msttexthash="4004" _msthash="2544">,</span> <span class="pl-k" _msttexthash="118703" _msthash="2545">función</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span><span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-k" _msttexthash="187642" _msthash="2546">devolución</span></div></div></div><div data-key="228" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4560px); min-height: auto;"><div><div id="LC229" class="react-file-line html-div" data-testid="code-cell" data-line-number="229" inert="inert" style="position: relative;">
</div></div></div><div data-key="229" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4580px); min-height: auto;"><div><div id="LC230" class="react-file-line html-div" data-testid="code-cell" data-line-number="230" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="21385" _msthash="2591">si</span> <span class="pl-kos">(</span><span class="pl-c1" _msttexthash="3003" _msthash="2592">!</span><span class="pl-v" _msttexthash="94575" _msthash="2593">Arreglo</span><span class="pl-kos" _msttexthash="4186" _msthash="2594">.</span><span class="pl-en" _msttexthash="95823" _msthash="2595">isArray</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2596">Elementos</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="230" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4600px); min-height: auto;"><div><div id="LC231" class="react-file-line html-div" data-testid="code-cell" data-line-number="231" inert="inert" style="position: relative;">          <span class="pl-s1" _msttexthash="137332" _msthash="2589">Elementos</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span> <span class="pl-s1" _msttexthash="137332" _msthash="2590">Elementos</span> <span class="pl-kos">]</span></div></div></div><div data-key="231" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4620px); min-height: auto;"><div><div id="LC232" class="react-file-line html-div" data-testid="code-cell" data-line-number="232" inert="inert" style="position: relative;">      <span class="pl-kos">}</span></div></div></div><div data-key="232" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4640px); min-height: auto;"><div><div id="LC233" class="react-file-line html-div" data-testid="code-cell" data-line-number="233" inert="inert" style="position: relative;">
</div></div></div><div data-key="233" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4660px); min-height: auto;"><div><div id="LC234" class="react-file-line html-div" data-testid="code-cell" data-line-number="234" inert="inert" style="position: relative;">      <span class="pl-s1" _msttexthash="206427" _msthash="2584">liveElements</span><span class="pl-kos" _msttexthash="4186" _msthash="2585">.</span><span class="pl-en" _msttexthash="81536" _msthash="2586">filtro</span><span class="pl-kos">(</span><span class="pl-k" _msttexthash="118703" _msthash="2587">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2588">e</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="234" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4680px); min-height: auto;"><div><div id="LC235" class="react-file-line html-div" data-testid="code-cell" data-line-number="235" inert="inert" style="position: relative;">          <span class="pl-k" _msttexthash="187642" _msthash="2575">devolución</span> <span class="pl-s1" _msttexthash="137332" _msthash="2576">Elementos</span><span class="pl-kos" _msttexthash="4186" _msthash="2577">.</span><span class="pl-en" _msttexthash="92547" _msthash="2578">indexOf</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2579">e</span><span class="pl-kos" _msttexthash="4186" _msthash="2580">.</span><span class="pl-c1" _msttexthash="117819" _msthash="2581">elemento</span><span class="pl-kos">)</span> <span class="pl-c1" _msttexthash="16484" _msthash="2582">!==</span> <span class="pl-c1">-</span><span class="pl-c1" _msttexthash="4459" _msthash="2583">1</span></div></div></div><div data-key="235" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4700px); min-height: auto;"><div><div id="LC236" class="react-file-line html-div" data-testid="code-cell" data-line-number="236" inert="inert" style="position: relative;">      <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos" _msttexthash="4186" _msthash="2571">.</span><span class="pl-en" _msttexthash="90025" _msthash="2572">forEach</span><span class="pl-kos">(</span><span class="pl-k" _msttexthash="118703" _msthash="2573">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2574">e</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="236" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4720px); min-height: auto;"><div><div id="LC237" class="react-file-line html-div" data-testid="code-cell" data-line-number="237" inert="inert" style="position: relative;">          <span class="pl-s1" _msttexthash="9191" _msthash="2561">e</span><span class="pl-kos" _msttexthash="4186" _msthash="2562">.</span><span class="pl-c1" _msttexthash="117819" _msthash="2563">elemento</span><span class="pl-kos" _msttexthash="4186" _msthash="2564">.</span><span class="pl-en" _msttexthash="417664" _msthash="2565">removeEventListener</span><span class="pl-kos">(</span><span class="pl-s" _msttexthash="115596" _msthash="2566">'entrada'</span><span class="pl-kos" _msttexthash="4004" _msthash="2567">,</span> <span class="pl-s1" _msttexthash="9191" _msthash="2568">e</span><span class="pl-kos" _msttexthash="4186" _msthash="2569">.</span><span class="pl-c1" _msttexthash="182897" _msthash="2570">Controlador</span><span class="pl-kos">)</span></div></div></div><div data-key="237" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4740px); min-height: auto;"><div><div id="LC238" class="react-file-line html-div" data-testid="code-cell" data-line-number="238" inert="inert" style="position: relative;">      <span class="pl-kos">}</span><span class="pl-kos">)</span></div></div></div><div data-key="238" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4760px); min-height: auto;"><div><div id="LC239" class="react-file-line html-div" data-testid="code-cell" data-line-number="239" inert="inert" style="position: relative;">
</div></div></div><div data-key="239" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4780px); min-height: auto;"><div><div id="LC240" class="react-file-line html-div" data-testid="code-cell" data-line-number="240" inert="inert" style="position: relative;">      <span class="pl-s1" _msttexthash="206427" _msthash="2606">liveElements</span> <span class="pl-c1">=</span> <span class="pl-s1" _msttexthash="206427" _msthash="2607">liveElements</span><span class="pl-kos" _msttexthash="4186" _msthash="2608">.</span><span class="pl-en" _msttexthash="81536" _msthash="2609">filtro</span><span class="pl-kos">(</span><span class="pl-k" _msttexthash="118703" _msthash="2610">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2611">e</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="240" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4800px); min-height: auto;"><div><div id="LC241" class="react-file-line html-div" data-testid="code-cell" data-line-number="241" inert="inert" style="position: relative;">          <span class="pl-k" _msttexthash="187642" _msthash="1970">devolución</span> <span class="pl-s1" _msttexthash="137332" _msthash="1971">Elementos</span><span class="pl-kos" _msttexthash="4186" _msthash="1972">.</span><span class="pl-en" _msttexthash="92547" _msthash="1973">indexOf</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="1974">e</span><span class="pl-kos" _msttexthash="4186" _msthash="1975">.</span><span class="pl-c1" _msttexthash="117819" _msthash="1976">elemento</span><span class="pl-kos">)</span> <span class="pl-c1">===</span> <span class="pl-c1">-</span><span class="pl-c1" _msttexthash="4459" _msthash="1977">1</span></div></div></div><div data-key="241" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4820px); min-height: auto;"><div><div id="LC242" class="react-file-line html-div" data-testid="code-cell" data-line-number="242" inert="inert" style="position: relative;">      <span class="pl-kos">}</span><span class="pl-kos">)</span></div></div></div><div data-key="242" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4840px); min-height: auto;"><div><div id="LC243" class="react-file-line html-div" data-testid="code-cell" data-line-number="243" inert="inert" style="position: relative;">
</div></div></div><div data-key="243" class="child-of-line-226  react-code-text react-code-line-contents virtual" style="transform: translateY(4860px); min-height: auto;"><div><div id="LC244" class="react-file-line html-div" data-testid="code-cell" data-line-number="244" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="187642" _msthash="1978">devolución</span> <span class="pl-smi" _msttexthash="59865" _msthash="1979">éste</span></div></div></div><div data-key="244" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4880px); min-height: auto;"><div><div id="LC245" class="react-file-line html-div" data-testid="code-cell" data-line-number="245" inert="inert" style="position: relative;">    <span class="pl-kos">}</span><span class="pl-kos" _msttexthash="4004" _msthash="1980">,</span></div></div></div><div data-key="245" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4900px); min-height: auto;"><div><div id="LC246" class="react-file-line html-div" data-testid="code-cell" data-line-number="246" inert="inert" style="position: relative;">
</div></div></div><div data-key="246" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4920px); min-height: auto;"><div><div id="LC247" class="react-file-line html-div" data-testid="code-cell" data-line-number="247" inert="inert" style="position: relative;">    <span class="pl-c">/**</span></div></div></div><div data-key="247" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4940px); min-height: auto;"><div><div id="LC248" class="react-file-line html-div" data-testid="code-cell" data-line-number="248" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="5437562" _msthash="1981"> * El método 'count' funciona principalmente como el método 'live', pero no hay eventos que lo sean.</span></div></div></div><div data-key="248" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4960px); min-height: auto;"><div><div id="LC249" class="react-file-line html-div" data-testid="code-cell" data-line-number="249" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1555190" _msthash="1982"> * bound, la funcionalidad solo se ejecuta una vez.</span></div></div></div><div data-key="249" class="react-code-text react-code-line-contents virtual" style="transform: translateY(4980px); min-height: auto;"><div><div id="LC250" class="react-file-line html-div" data-testid="code-cell" data-line-number="250" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="250" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5000px); min-height: auto;"><div><div id="LC251" class="react-file-line html-div" data-testid="code-cell" data-line-number="251" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="74516" _msthash="1983">@param</span>   {<span class="pl-smi" _msttexthash="201383" _msthash="1984">Nodos|Cuerda</span><font _mstmutation="1" _msttexthash="1577043" _msthash="1985">} apunta a todos los elementos que se deben contar.</font></span></div></div></div><div data-key="251" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5020px); min-height: auto;"><div><div id="LC252" class="react-file-line html-div" data-testid="code-cell" data-line-number="252" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="252" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5040px); min-height: auto;"><div><div id="LC253" class="react-file-line html-div" data-testid="code-cell" data-line-number="253" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="74516" _msthash="1986">@param</span>   {<span class="pl-smi" _msttexthash="115791" _msthash="1987">Función</span><font _mstmutation="1" _msttexthash="2520843" _msthash="1988">} callback La devolución de llamada para disparar cada vez que el</font></span></div></div></div><div data-key="253" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5060px); min-height: auto;"><div><div id="LC254" class="react-file-line html-div" data-testid="code-cell" data-line-number="254" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2186067" _msthash="1989"> * Cambios en el valor del elemento. La devolución de llamada</span></div></div></div><div data-key="254" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5080px); min-height: auto;"><div><div id="LC255" class="react-file-line html-div" data-testid="code-cell" data-line-number="255" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="889720" _msthash="1990"> * se llama con el elemento relevante</span></div></div></div><div data-key="255" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5100px); min-height: auto;"><div><div id="LC256" class="react-file-line html-div" data-testid="code-cell" data-line-number="256" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1199575" _msthash="1991"> * enlazado a 'this' y a los valores contados</span></div></div></div><div data-key="256" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5120px); min-height: auto;"><div><div id="LC257" class="react-file-line html-div" data-testid="code-cell" data-line-number="257" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="498407" _msthash="1992"> * como parámetro único.</span></div></div></div><div data-key="257" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5140px); min-height: auto;"><div><div id="LC258" class="react-file-line html-div" data-testid="code-cell" data-line-number="258" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="258" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5160px); min-height: auto;"><div><div id="LC259" class="react-file-line html-div" data-testid="code-cell" data-line-number="259" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="74516" _msthash="1993">@param</span>   {<span class="pl-smi" _msttexthash="76817" _msthash="1994">Objeto</span><font _mstmutation="1" _msttexthash="1090713" _msthash="1995">} [opciones] Un objeto para modificar el</font></span></div></div></div><div data-key="259" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5180px); min-height: auto;"><div><div id="LC260" class="react-file-line html-div" data-testid="code-cell" data-line-number="260" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="304200" _msthash="1996"> *comportamiento.</span></div></div></div><div data-key="260" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5200px); min-height: auto;"><div><div id="LC261" class="react-file-line html-div" data-testid="code-cell" data-line-number="261" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="261" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5220px); min-height: auto;"><div><div id="LC262" class="react-file-line html-div" data-testid="code-cell" data-line-number="262" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="97682" _msthash="1997">@return</span>  {<span class="pl-smi" _msttexthash="76817" _msthash="1998">Objeto</span><font _mstmutation="1" _msttexthash="2524171" _msthash="1999">} Devuelve el objeto Countable para permitir el encadenamiento.</font></span></div></div></div><div data-key="262" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5240px); min-height: auto;"><div><div id="LC263" class="react-file-line html-div" data-testid="code-cell" data-line-number="263" inert="inert" style="position: relative;"><span class="pl-c">     */</span></div></div></div><div data-key="263" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5260px); min-height: auto;"><div><div id="LC264" class="react-file-line html-div" data-testid="code-cell" data-line-number="264" inert="inert" style="position: relative;">
</div></div></div><div data-key="264" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5280px); min-height: auto;"><div><div id="LC265" class="react-file-line html-div" data-testid="code-cell" data-line-number="265" inert="inert" style="position: relative;">    <span class="pl-en" _msttexthash="80158" _msthash="2000">contar</span><font _mstmutation="1" _msttexthash="5278" _msthash="2001">: </font><span class="pl-k" _msttexthash="118703" _msthash="2002">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="138450" _msthash="2003">Objetivos</span><span class="pl-kos" _msttexthash="4004" _msthash="2004">,</span> <span class="pl-s1" _msttexthash="108212" _msthash="2005">Callback</span><span class="pl-kos" _msttexthash="4004" _msthash="2006">,</span> <span class="pl-s1" _msttexthash="115102" _msthash="2007">Opciones</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="265" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5300px); min-height: auto;"><div><div id="LC266" class="react-file-line html-div" data-testid="code-cell" data-line-number="266" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="21385" _msthash="2008">si</span> <span class="pl-kos">(</span><span class="pl-c1" _msttexthash="3003" _msthash="2009">!</span><span class="pl-en" _msttexthash="351832" _msthash="2010">validateArguments</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="138450" _msthash="2011">Objetivos</span><span class="pl-kos" _msttexthash="4004" _msthash="2012">,</span> <span class="pl-s1" _msttexthash="108212" _msthash="2013">Callback</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-k" _msttexthash="187642" _msthash="2014">devolución</span></div></div></div><div data-key="266" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5320px); min-height: auto;"><div><div id="LC267" class="react-file-line html-div" data-testid="code-cell" data-line-number="267" inert="inert" style="position: relative;">
</div></div></div><div data-key="267" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5340px); min-height: auto;"><div><div id="LC268" class="react-file-line html-div" data-testid="code-cell" data-line-number="268" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="21385" _msthash="2015">si</span> <span class="pl-kos">(</span><span class="pl-c1" _msttexthash="3003" _msthash="2016">!</span><span class="pl-v" _msttexthash="94575" _msthash="2017">Arreglo</span><span class="pl-kos" _msttexthash="4186" _msthash="2018">.</span><span class="pl-en" _msttexthash="95823" _msthash="2019">isArray</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="138450" _msthash="2020">Objetivos</span><span class="pl-kos">)</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="268" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5360px); min-height: auto;"><div><div id="LC269" class="react-file-line html-div" data-testid="code-cell" data-line-number="269" inert="inert" style="position: relative;">          <span class="pl-s1" _msttexthash="138450" _msthash="2021">Objetivos</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span> <span class="pl-s1" _msttexthash="138450" _msthash="2022">Objetivos</span> <span class="pl-kos">]</span></div></div></div><div data-key="269" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5380px); min-height: auto;"><div><div id="LC270" class="react-file-line html-div" data-testid="code-cell" data-line-number="270" inert="inert" style="position: relative;">      <span class="pl-kos">}</span></div></div></div><div data-key="270" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5400px); min-height: auto;"><div><div id="LC271" class="react-file-line html-div" data-testid="code-cell" data-line-number="271" inert="inert" style="position: relative;">
</div></div></div><div data-key="271" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5420px); min-height: auto;"><div><div id="LC272" class="react-file-line html-div" data-testid="code-cell" data-line-number="272" inert="inert" style="position: relative;">      <span class="pl-s1" _msttexthash="43407" _msthash="2023">cada</span><span class="pl-kos" _msttexthash="4186" _msthash="2024">.</span><span class="pl-en" _msttexthash="78234" _msthash="2025">llamar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="138450" _msthash="2026">Objetivos</span><span class="pl-kos" _msttexthash="4004" _msthash="2027">,</span> <span class="pl-k" _msttexthash="118703" _msthash="2028">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2029">e</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="272" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5440px); min-height: auto;"><div><div id="LC273" class="react-file-line html-div" data-testid="code-cell" data-line-number="273" inert="inert" style="position: relative;">          <span class="pl-s1" _msttexthash="108212" _msthash="2030">Callback</span><span class="pl-kos" _msttexthash="4186" _msthash="2031">.</span><span class="pl-en" _msttexthash="78234" _msthash="2032">llamar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2033">e</span><span class="pl-kos" _msttexthash="4004" _msthash="2034">,</span> <span class="pl-en" _msttexthash="80158" _msthash="2035">contar</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2036">e</span><span class="pl-kos" _msttexthash="4004" _msthash="2037">,</span> <span class="pl-s1" _msttexthash="115102" _msthash="2038">Opciones</span><span class="pl-kos">)</span><span class="pl-kos">)</span></div></div></div><div data-key="273" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5460px); min-height: auto;"><div><div id="LC274" class="react-file-line html-div" data-testid="code-cell" data-line-number="274" inert="inert" style="position: relative;">      <span class="pl-kos">}</span><span class="pl-kos">)</span></div></div></div><div data-key="274" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5480px); min-height: auto;"><div><div id="LC275" class="react-file-line html-div" data-testid="code-cell" data-line-number="275" inert="inert" style="position: relative;">
</div></div></div><div data-key="275" class="child-of-line-264  react-code-text react-code-line-contents virtual" style="transform: translateY(5500px); min-height: auto;"><div><div id="LC276" class="react-file-line html-div" data-testid="code-cell" data-line-number="276" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="187642" _msthash="2039">devolución</span> <span class="pl-smi" _msttexthash="59865" _msthash="2040">éste</span></div></div></div><div data-key="276" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5520px); min-height: auto;"><div><div id="LC277" class="react-file-line html-div" data-testid="code-cell" data-line-number="277" inert="inert" style="position: relative;">    <span class="pl-kos">}</span><span class="pl-kos" _msttexthash="4004" _msthash="2041">,</span></div></div></div><div data-key="277" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5540px); min-height: auto;"><div><div id="LC278" class="react-file-line html-div" data-testid="code-cell" data-line-number="278" inert="inert" style="position: relative;">
</div></div></div><div data-key="278" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5560px); min-height: auto;"><div><div id="LC279" class="react-file-line html-div" data-testid="code-cell" data-line-number="279" inert="inert" style="position: relative;">    <span class="pl-c">/**</span></div></div></div><div data-key="279" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5580px); min-height: auto;"><div><div id="LC280" class="react-file-line html-div" data-testid="code-cell" data-line-number="280" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="4204486" _msthash="2042"> * El método 'enabled' comprueba si la funcionalidad de conteo en vivo está vinculada</span></div></div></div><div data-key="280" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5600px); min-height: auto;"><div><div id="LC281" class="react-file-line html-div" data-testid="code-cell" data-line-number="281" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="215644" _msthash="2043"> * a un elemento.</span></div></div></div><div data-key="281" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5620px); min-height: auto;"><div><div id="LC282" class="react-file-line html-div" data-testid="code-cell" data-line-number="282" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="282" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5640px); min-height: auto;"><div><div id="LC283" class="react-file-line html-div" data-testid="code-cell" data-line-number="283" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="74516" _msthash="2044">@param</span>   {<span class="pl-smi" _msttexthash="44772" _msthash="2045">Nodo</span><font _mstmutation="1" _msttexthash="2264574" _msthash="2046">} todos los elementos que deben ser marcados para el elemento</font></span></div></div></div><div data-key="283" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5660px); min-height: auto;"><div><div id="LC284" class="react-file-line html-div" data-testid="code-cell" data-line-number="284" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="530868" _msthash="2047"> * Funcionalidad contable.</span></div></div></div><div data-key="284" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5680px); min-height: auto;"><div><div id="LC285" class="react-file-line html-div" data-testid="code-cell" data-line-number="285" inert="inert" style="position: relative;"><span class="pl-c">     *</span></div></div></div><div data-key="285" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5700px); min-height: auto;"><div><div id="LC286" class="react-file-line html-div" data-testid="code-cell" data-line-number="286" inert="inert" style="position: relative;"><span class="pl-c">     * <span class="pl-k" _msttexthash="97682" _msthash="2048">@return</span>  {<span class="pl-smi" _msttexthash="112944" _msthash="2049">Booleano</span><font _mstmutation="1" _msttexthash="1464151" _msthash="2050">} Un valor booleano que representa si Countable</font></span></div></div></div><div data-key="286" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5720px); min-height: auto;"><div><div id="LC287" class="react-file-line html-div" data-testid="code-cell" data-line-number="287" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2168660" _msthash="2051"> * La funcionalidad está ligada a todos los elementos dados.</span></div></div></div><div data-key="287" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5740px); min-height: auto;"><div><div id="LC288" class="react-file-line html-div" data-testid="code-cell" data-line-number="288" inert="inert" style="position: relative;"><span class="pl-c">     */</span></div></div></div><div data-key="288" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5760px); min-height: auto;"><div><div id="LC289" class="react-file-line html-div" data-testid="code-cell" data-line-number="289" inert="inert" style="position: relative;">
</div></div></div><div data-key="289" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5780px); min-height: auto;"><div><div id="LC290" class="react-file-line html-div" data-testid="code-cell" data-line-number="290" inert="inert" style="position: relative;">    <span class="pl-en" _msttexthash="153426" _msthash="2052">Habilitado</span><font _mstmutation="1" _msttexthash="5278" _msthash="2053">: </font><span class="pl-k" _msttexthash="118703" _msthash="2054">función</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2055">Elementos</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="290" class="child-of-line-289  react-code-text react-code-line-contents virtual" style="transform: translateY(5800px); min-height: auto;"><div><div id="LC291" class="react-file-line html-div" data-testid="code-cell" data-line-number="291" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="21385" _msthash="2056">si</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="137332" _msthash="2057">Elementos</span><span class="pl-kos" _msttexthash="4186" _msthash="2058">.</span><span class="pl-c1" _msttexthash="97552" _msthash="2059">largura</span> <span class="pl-c1">===</span> <span class="pl-c1" _msttexthash="157079" _msthash="2060">indefinido</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="291" class="child-of-line-289  react-code-text react-code-line-contents virtual" style="transform: translateY(5820px); min-height: auto;"><div><div id="LC292" class="react-file-line html-div" data-testid="code-cell" data-line-number="292" inert="inert" style="position: relative;">        <span class="pl-s1" _msttexthash="137332" _msthash="2061">Elementos</span> <span class="pl-c1">=</span> <span class="pl-kos">[</span> <span class="pl-s1" _msttexthash="137332" _msthash="2062">Elementos</span> <span class="pl-kos">]</span></div></div></div><div data-key="292" class="child-of-line-289  react-code-text react-code-line-contents virtual" style="transform: translateY(5840px); min-height: auto;"><div><div id="LC293" class="react-file-line html-div" data-testid="code-cell" data-line-number="293" inert="inert" style="position: relative;">      <span class="pl-kos">}</span></div></div></div><div data-key="293" class="child-of-line-289  react-code-text react-code-line-contents virtual" style="transform: translateY(5860px); min-height: auto;"><div><div id="LC294" class="react-file-line html-div" data-testid="code-cell" data-line-number="294" inert="inert" style="position: relative;">
</div></div></div><div data-key="294" class="child-of-line-289  react-code-text react-code-line-contents virtual" style="transform: translateY(5880px); min-height: auto;"><div><div id="LC295" class="react-file-line html-div" data-testid="code-cell" data-line-number="295" inert="inert" style="position: relative;">      <span class="pl-k" _msttexthash="83122" _msthash="2063">return</span> <span class="pl-s1" _msttexthash="206427" _msthash="2064">liveElements</span><span class="pl-kos" _msttexthash="4186" _msthash="2065">.</span><span class="pl-en" _msttexthash="80145" _msthash="2066">filter</span><span class="pl-kos">(</span><span class="pl-k" _msttexthash="118937" _msthash="2067">function</span> <span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2068">e</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="295" class="child-of-line-289  react-code-text react-code-line-contents virtual" style="transform: translateY(5900px); min-height: auto;"><div><div id="LC296" class="react-file-line html-div" data-testid="code-cell" data-line-number="296" inert="inert" style="position: relative;">          <span class="pl-k" _msttexthash="83122" _msthash="2069">return</span> <span class="pl-s1" _msttexthash="118547" _msthash="2070">elements</span><span class="pl-kos" _msttexthash="4186" _msthash="2071">.</span><span class="pl-en" _msttexthash="92547" _msthash="2072">indexOf</span><span class="pl-kos">(</span><span class="pl-s1" _msttexthash="9191" _msthash="2073">e</span><span class="pl-kos" _msttexthash="4186" _msthash="2074">.</span><span class="pl-c1" _msttexthash="97617" _msthash="2075">element</span><span class="pl-kos">)</span> <span class="pl-c1" _msttexthash="16484" _msthash="2076">!==</span> <span class="pl-c1">-</span><span class="pl-c1" _msttexthash="4459" _msthash="2077">1</span></div></div></div><div data-key="296" class="child-of-line-289  react-code-text react-code-line-contents virtual" style="transform: translateY(5920px); min-height: auto;"><div><div id="LC297" class="react-file-line html-div" data-testid="code-cell" data-line-number="297" inert="inert" style="position: relative;">      <span class="pl-kos">}</span><span class="pl-kos">)</span><span class="pl-kos" _msttexthash="4186" _msthash="2078">.</span><span class="pl-c1" _msttexthash="79404" _msthash="2079">length</span> <span class="pl-c1">===</span> <span class="pl-s1" _msttexthash="118547" _msthash="2080">elements</span><span class="pl-kos" _msttexthash="4186" _msthash="2081">.</span><span class="pl-c1" _msttexthash="79404" _msthash="2082">length</span></div></div></div><div data-key="297" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5940px); min-height: auto;"><div><div id="LC298" class="react-file-line html-div" data-testid="code-cell" data-line-number="298" inert="inert" style="position: relative;">    <span class="pl-kos">}</span></div></div></div><div data-key="298" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5960px); min-height: auto;"><div><div id="LC299" class="react-file-line html-div" data-testid="code-cell" data-line-number="299" inert="inert" style="position: relative;">
</div></div></div><div data-key="299" class="react-code-text react-code-line-contents virtual" style="transform: translateY(5980px); min-height: auto;"><div><div id="LC300" class="react-file-line html-div" data-testid="code-cell" data-line-number="300" inert="inert" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="300" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6000px); min-height: auto;"><div><div id="LC301" class="react-file-line html-div" data-testid="code-cell" data-line-number="301" inert="inert" style="position: relative;">
</div></div></div><div data-key="301" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6020px); min-height: auto;"><div><div id="LC302" class="react-file-line html-div" data-testid="code-cell" data-line-number="302" inert="inert" style="position: relative;">  <span class="pl-c">/**</span></div></div></div><div data-key="302" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6040px); min-height: auto;"><div><div id="LC303" class="react-file-line html-div" data-testid="code-cell" data-line-number="303" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="2614079" _msthash="2083">   * Expose Countable depending on the module system used across the</span></div></div></div><div data-key="303" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6060px); min-height: auto;"><div><div id="LC304" class="react-file-line html-div" data-testid="code-cell" data-line-number="304" inert="inert" style="position: relative;"><span class="pl-c" _msttexthash="1150929" _msthash="2084">   * application. (Node / CommonJS, AMD, global)</span></div></div></div><div data-key="304" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6080px); min-height: auto;"><div><div id="LC305" class="react-file-line html-div" data-testid="code-cell" data-line-number="305" inert="inert" style="position: relative;"><span class="pl-c">   */</span></div></div></div><div data-key="305" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6100px); min-height: auto;"><div><div id="LC306" class="react-file-line html-div" data-testid="code-cell" data-line-number="306" inert="inert" style="position: relative;">
</div></div></div><div data-key="306" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6120px); min-height: auto;"><div><div id="LC307" class="react-file-line html-div" data-testid="code-cell" data-line-number="307" inert="inert" style="position: relative;">  <span class="pl-k" _msttexthash="20163" _msthash="2085">if</span> <span class="pl-kos">(</span><span class="pl-k" _msttexthash="81159" _msthash="2086">typeof</span> <span class="pl-s1" _msttexthash="103038" _msthash="2087">exports</span> <span class="pl-c1">===</span> <span class="pl-s" _msttexthash="96928" _msthash="2088">'object'</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="307" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6140px); min-height: auto;"><div><div id="LC308" class="react-file-line html-div" data-testid="code-cell" data-line-number="308" inert="inert" style="position: relative;">    <span class="pl-smi" _msttexthash="79573" _msthash="2089">module</span><span class="pl-kos" _msttexthash="4186" _msthash="2090">.</span><span class="pl-c1" _msttexthash="103038" _msthash="2091">exports</span> <span class="pl-c1">=</span> <span class="pl-v" _msttexthash="133263" _msthash="2092">Countable</span></div></div></div><div data-key="308" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6160px); min-height: auto;"><div><div id="LC309" class="react-file-line html-div" data-testid="code-cell" data-line-number="309" inert="inert" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k" _msttexthash="47008" _msthash="2093">else</span> <span class="pl-k" _msttexthash="20163" _msthash="2094">if</span> <span class="pl-kos">(</span><span class="pl-k" _msttexthash="81159" _msthash="2095">typeof</span> <span class="pl-s1" _msttexthash="76674" _msthash="2096">define</span> <span class="pl-c1">===</span> <span class="pl-s" _msttexthash="141908" _msthash="2097">'function'</span> <span class="pl-c1">&amp;&amp;</span> <span class="pl-s1" _msttexthash="76674" _msthash="2098">define</span><span class="pl-kos" _msttexthash="4186" _msthash="2099">.</span><span class="pl-c1" _msttexthash="31863" _msthash="2100">amd</span><span class="pl-kos">)</span> <span class="pl-kos">{</span></div></div></div><div data-key="309" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6180px); min-height: auto;"><div><div id="LC310" class="react-file-line html-div" data-testid="code-cell" data-line-number="310" inert="inert" style="position: relative;">    <span class="pl-en" _msttexthash="76674" _msthash="2101">define</span><span class="pl-kos">(</span><span class="pl-k" _msttexthash="118937" _msthash="2102">function</span> <span class="pl-kos">(</span><span class="pl-kos">)</span> <span class="pl-kos">{</span> <span class="pl-k" _msttexthash="83122" _msthash="2103">return</span> <span class="pl-v" _msttexthash="133263" _msthash="2104">Countable</span> <span class="pl-kos">}</span><span class="pl-kos">)</span></div></div></div><div data-key="310" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6200px); min-height: auto;"><div><div id="LC311" class="react-file-line html-div" data-testid="code-cell" data-line-number="311" inert="inert" style="position: relative;">  <span class="pl-kos">}</span> <span class="pl-k" _msttexthash="47008" _msthash="2105">else</span> <span class="pl-kos">{</span></div></div></div><div data-key="311" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6220px); min-height: auto;"><div><div id="LC312" class="react-file-line html-div" data-testid="code-cell" data-line-number="312" inert="inert" style="position: relative;">    <span class="pl-s1" _msttexthash="77051" _msthash="2106">global</span><span class="pl-kos" _msttexthash="4186" _msthash="2107">.</span><span class="pl-c1" _msttexthash="133263" _msthash="2108">Countable</span> <span class="pl-c1">=</span> <span class="pl-v" _msttexthash="133263" _msthash="2109">Countable</span></div></div></div><div data-key="312" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6240px); min-height: auto;"><div><div id="LC313" class="react-file-line html-div" data-testid="code-cell" data-line-number="313" inert="inert" style="position: relative;">  <span class="pl-kos">}</span></div></div></div><div data-key="313" class="react-code-text react-code-line-contents virtual" style="transform: translateY(6260px); min-height: auto;"><div><div id="LC314" class="react-file-line html-div" data-testid="code-cell" data-line-number="314" inert="inert" style="position: relative;"><span class="pl-kos">}</span><span class="pl-kos">(</span><span class="pl-smi" _msttexthash="48607" _msthash="2110">this</span><span class="pl-kos">)</span><span class="pl-kos">)</span><span class="pl-kos">;</span></div></div></div></div><button hidden="" data-hotkey="Control+a"></button></div></div><div class="Box-sc-g0xbh4-0 fXFeWj"><div class="Box-sc-g0xbh4-0 fkBlkY"></div></div></div></div><div id="copilot-button-container"></div></div><div id="highlighted-line-menu-container"></div></div></div></section></div></div><div class="Box-sc-g0xbh4-0 mgQhK"></div><div class="Box-sc-g0xbh4-0 lpeRui panel-content-narrow-styles inner-panel-content-not-narrow"><div id="symbols-pane"><div aria-labelledby="symbols-pane-header" class="Box-sc-g0xbh4-0 cxUsTr"><div class="Box-sc-g0xbh4-0 jXkPPw"><h2 id="symbols-pane-header" tabindex="-1" class="Box-sc-g0xbh4-0 hECgeo" _msttexthash="130104" _msthash="2155">Símbolos</h2><button data-component="IconButton" type="button" aria-label="Cerrar símbolos" data-hotkey="Escape" class="Box-sc-g0xbh4-0 kybBdn prc-Button-ButtonBase-c50BI prc-Button-IconButton-szpyj" data-loading="false" data-no-visuals="true" data-size="medium" data-variant="invisible" aria-describedby=":r3t:-loading-announcement" _mstaria-label="210912" _msthash="2156"><svg aria-hidden="true" focusable="false" class="octicon octicon-x" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg></button></div><div class="Box-sc-g0xbh4-0 cUqGUN" _msttexthash="10387832" _msthash="2157">Encuentre definiciones y referencias para funciones y otros símbolos en este archivo haciendo clic en un símbolo debajo o en el código.</div><span class="TextInputWrapper__StyledTextInputBaseWrapper-sc-1mqhpbi-0 hNhNLm TextInputWrapper__StyledTextInputWrapper-sc-1mqhpbi-1 jBYDAC TextInput-wrapper" data-block="true" data-trailing-action="true" data-leading-visual="true" data-trailing-visual="true" aria-busy="false"><span class="TextInput-icon" id=":r3u:" aria-hidden="true"><svg aria-hidden="true" focusable="false" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M.75 3h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM3 7.75A.75.75 0 0 1 3.75 7h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 3 7.75Zm3 4a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path></svg></span><input type="text" placeholder="Símbolos de filtro" name="Filter symbols" aria-label="Símbolos de filtro" aria-controls="filter-results" aria-expanded="true" aria-autocomplete="list" role="combobox" aria-describedby=":r3u: :r3v:" data-component="input" class="UnstyledTextInput__ToggledUnstyledTextInput-sc-14ypya-0 jkNcAv" value="" _mstplaceholder="238537" _msthash="2158" _mstaria-label="238537"><span class="TextInput-icon" id=":r3v:" aria-hidden="true"><div class="Box-sc-g0xbh4-0 gqhZpQ"><kbd>r</kbd></div></span></span><div class="Box-sc-g0xbh4-0 ccgkJf"><div id="filter-results" class="Box-sc-g0xbh4-0 kACRto"><span role="status" aria-live="polite" aria-atomic="true" class="_VisuallyHidden__VisuallyHidden-sc-11jhm7a-0 brGdpi"></span><ul role="tree" aria-label="Navegación de código" data-omit-spacer="false" data-truncate-text="true" class="TreeView__UlBox-sc-4ex6b6-0 jgdSGi" _mstaria-label="254293" _msthash="2159"><li class="PRIVATE_TreeView-item" tabindex="0" id="0decode" role="treeitem" aria-labelledby=":r41:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r41:" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text"><div class="Box-sc-g0xbh4-0 cSURfY"><div class="Box-sc-g0xbh4-0 bTXewe"><div class="Box-sc-g0xbh4-0 hXsfco"></div><div class="Box-sc-g0xbh4-0 bgxsom" _msttexthash="47190" _msthash="2160">func</div></div>  <div title="decode" class="Truncate__StyledTruncate-sc-23o1d2-0 btDQYJ"><span _msttexthash="202891" _msthash="2161">descodificar</span></div></div></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="1validateArguments" role="treeitem" aria-labelledby=":r44:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r44:" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text"><div class="Box-sc-g0xbh4-0 cSURfY"><div class="Box-sc-g0xbh4-0 bTXewe"><div class="Box-sc-g0xbh4-0 hXsfco"></div><div class="Box-sc-g0xbh4-0 bgxsom" _msttexthash="47190" _msthash="2162">func</div></div>  <div title="validateArguments" class="Truncate__StyledTruncate-sc-23o1d2-0 btDQYJ"><span _msttexthash="351832" _msthash="2163">validateArguments</span></div></div></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="2count" role="treeitem" aria-labelledby=":r47:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r47:" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text"><div class="Box-sc-g0xbh4-0 cSURfY"><div class="Box-sc-g0xbh4-0 bTXewe"><div class="Box-sc-g0xbh4-0 hXsfco"></div><div class="Box-sc-g0xbh4-0 bgxsom" _msttexthash="47190" _msthash="2164">func</div></div>  <div title="count" class="Truncate__StyledTruncate-sc-23o1d2-0 btDQYJ"><span _msttexthash="80158" _msthash="2165">contar</span></div></div></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="3on" role="treeitem" aria-labelledby=":r4a:" aria-level="1" aria-expanded="true" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div class="PRIVATE_TreeView-item-toggle PRIVATE_TreeView-item-toggle--hover PRIVATE_TreeView-item-toggle--end"><svg aria-hidden="true" focusable="false" class="octicon octicon-chevron-down" viewBox="0 0 12 12" width="12" height="12" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg></div><div id=":r4a:" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text"><div class="Box-sc-g0xbh4-0 cSURfY"><div class="Box-sc-g0xbh4-0 bTXewe"><div class="Box-sc-g0xbh4-0 hXsfco"></div><div class="Box-sc-g0xbh4-0 bgxsom" _msttexthash="47190" _msthash="2166">func</div></div>  <div title="on" class="Truncate__StyledTruncate-sc-23o1d2-0 btDQYJ"><span _msttexthash="20631" _msthash="2167">en</span></div></div></span></div></div><ul role="group" style="list-style: none; padding: 0px; margin: 0px;"><li class="PRIVATE_TreeView-item" tabindex="-1" id="0handler" role="treeitem" aria-labelledby=":r4d:" aria-level="2" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 2;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"><div class="PRIVATE_TreeView-item-level-line"></div></div></div><div id=":r4d:" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text"><div class="Box-sc-g0xbh4-0 cSURfY"><div class="Box-sc-g0xbh4-0 bTXewe"><div class="Box-sc-g0xbh4-0 hXsfco"></div><div class="Box-sc-g0xbh4-0 bgxsom" _msttexthash="47190" _msthash="2168">func</div></div>  <div title="handler" class="Truncate__StyledTruncate-sc-23o1d2-0 btDQYJ"><span _msttexthash="182897" _msthash="2169">Controlador</span></div></div></span></div></div></li></ul></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="4off" role="treeitem" aria-labelledby=":r4g:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r4g:" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text"><div class="Box-sc-g0xbh4-0 cSURfY"><div class="Box-sc-g0xbh4-0 bTXewe"><div class="Box-sc-g0xbh4-0 hXsfco"></div><div class="Box-sc-g0xbh4-0 bgxsom" _msttexthash="47190" _msthash="2170">func</div></div>  <div title="off" class="Truncate__StyledTruncate-sc-23o1d2-0 btDQYJ"><span _msttexthash="93444" _msthash="2171">apagado</span></div></div></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="5count" role="treeitem" aria-labelledby=":r4j:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r4j:" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text"><div class="Box-sc-g0xbh4-0 cSURfY"><div class="Box-sc-g0xbh4-0 bTXewe"><div class="Box-sc-g0xbh4-0 hXsfco"></div><div class="Box-sc-g0xbh4-0 bgxsom" _msttexthash="47190" _msthash="2172">func</div></div>  <div title="count" class="Truncate__StyledTruncate-sc-23o1d2-0 btDQYJ"><span _msttexthash="80158" _msthash="2173">contar</span></div></div></span></div></div></li><li class="PRIVATE_TreeView-item" tabindex="-1" id="6enabled" role="treeitem" aria-labelledby=":r4m:" aria-level="1" aria-selected="false"><div class="PRIVATE_TreeView-item-container" style="--level: 1;"><div style="grid-area: spacer; display: flex;"><div style="width: 100%; display: flex;"></div></div><div id=":r4m:" class="PRIVATE_TreeView-item-content"><span class="PRIVATE_TreeView-item-content-text"><div class="Box-sc-g0xbh4-0 cSURfY"><div class="Box-sc-g0xbh4-0 bTXewe"><div class="Box-sc-g0xbh4-0 hXsfco"></div><div class="Box-sc-g0xbh4-0 bgxsom" _msttexthash="47190" _msthash="2174">func</div></div>  <div title="enabled" class="Truncate__StyledTruncate-sc-23o1d2-0 btDQYJ"><span _msttexthash="153426" _msthash="2175">Habilitado</span></div></div></span></div></div></li></ul></div></div></div></div></div></div>   </div></div></div><div class="Box-sc-g0xbh4-0"></div></div></div></div></div><div id="find-result-marks-container" class="Box-sc-g0xbh4-0 cCoXib"></div><button hidden="" data-testid="" data-hotkey-scope="read-only-cursor-text-area" data-hotkey="Control+F6,Control+Shift+F6"></button><button hidden="" data-hotkey="Control+F6,Control+Shift+F6"></button></div>   <script type="application/json" id="__PRIMER_DATA_:r17:__">{"resolvedServerColorMode":"day"}</script></div>
</react-app>




  </div>

</turbo-frame>

    </main>
  </div>

  </div>

          <footer class="footer pt-8 pb-6 f6 color-fg-muted p-responsive" role="contentinfo" hidden="">
  <h2 class="sr-only" _msttexthash="78208" _msthash="1522">Footer</h2>

  


  <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
    <div class="d-flex flex-items-center flex-shrink-0 mx-2">
      <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-2" href="https://github.com/" _mstaria-label="110916" _msthash="1523">
        <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
</svg>
</a>
      <span _msttexthash="247351" _msthash="1524">
        © 2025 GitHub,&nbsp;Inc.
      </span>
    </div>

    <nav aria-label="Footer" _mstaria-label="78208" _msthash="1525">
      <h3 class="sr-only" id="sr-footer-heading" _msttexthash="322478" _msthash="1526">Footer navigation</h3>

      <ul class="list-style-none d-flex flex-justify-center flex-wrap mb-2 mb-lg-0" aria-labelledby="sr-footer-heading">

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to Terms&quot;,&quot;label&quot;:&quot;text:terms&quot;}" href="https://docs.github.com/site-policy/github-terms/github-terms-of-service" data-view-component="true" class="Link--secondary Link" _msttexthash="62101" _msthash="1527">Terms</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to privacy&quot;,&quot;label&quot;:&quot;text:privacy&quot;}" href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" data-view-component="true" class="Link--secondary Link" _msttexthash="96525" _msthash="1528">Privacy</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to security&quot;,&quot;label&quot;:&quot;text:security&quot;}" href="https://github.com/security" data-view-component="true" class="Link--secondary Link" _msttexthash="119158" _msthash="1529">Security</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to status&quot;,&quot;label&quot;:&quot;text:status&quot;}" href="https://www.githubstatus.com/" data-view-component="true" class="Link--secondary Link" _msttexthash="80717" _msthash="1530">Status</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to docs&quot;,&quot;label&quot;:&quot;text:docs&quot;}" href="https://docs.github.com/" data-view-component="true" class="Link--secondary Link" _msttexthash="44265" _msthash="1531">Docs</a>
          </li>

          <li class="mx-2">
            <a data-analytics-event="{&quot;category&quot;:&quot;Footer&quot;,&quot;action&quot;:&quot;go to contact&quot;,&quot;label&quot;:&quot;text:contact&quot;}" href="https://support.github.com/?tags=dotcom-footer" data-view-component="true" class="Link--secondary Link" _msttexthash="94510" _msthash="1532">Contact</a>
          </li>

          <li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;cookies&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;cookies_link_subfooter_footer&quot;}" _msttexthash="229138" _msthash="1533">
      Manage cookies
    </button>
  </cookie-consent-link>
</li>

<li class="mx-2">
  <cookie-consent-link data-catalyst="">
    <button type="button" class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent" data-action="click:cookie-consent-link#showConsentManagement" data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;dont_share_info&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;dont_share_info_link_subfooter_footer&quot;}" _msttexthash="959348" _msthash="1534">
      Do not share my personal information
    </button>
  </cookie-consent-link>
</li>

      </ul>
    </nav>
  </div>
</footer>



    <ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999" data-initial-cookie-consent-allowed="" data-cookie-consent-required="false" data-catalyst=""></ghcc-consent>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden="" _msthidden="2">
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-alert">
    <path d="M6.457 1.047c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0 1 14.082 15H1.918a1.75 1.75 0 0 1-1.543-2.575Zm1.763.707a.25.25 0 0 0-.44 0L1.698 13.132a.25.25 0 0 0 .22.368h12.164a.25.25 0 0 0 .22-.368Zm.53 3.996v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 1.5 0ZM9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
</svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error" _msthidden="A" _mstaria-label="212654" _msthash="1535">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
    </button><font _mstmutation="1" _msttexthash="2574273" _msthidden="1" _msthash="1536">
    You can’t perform that action at this time.
  </font></div>

    <template id="site-details-dialog"></template>

    <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large" style="width:360px;"></div>
</div>

    <template id="snippet-clipboard-copy-button"></template>
<template id="snippet-clipboard-copy-button-unpositioned"></template>


    <style>
      .user-mention[href$="/beto77-74"] {
        color: var(--color-user-mention-fg);
        background-color: var(--bgColor-attention-muted, var(--color-attention-subtle));
        border-radius: 2px;
        margin-left: -2px;
        margin-right: -2px;
      }
      .user-mention[href$="/beto77-74"]:before,
      .user-mention[href$="/beto77-74"]:after {
        content: '';
        display: inline-block;
        width: 2px;
      }
    </style>


    </div>

    <div id="js-global-screen-reader-notice" class="sr-only mt-n1" aria-live="polite" aria-atomic="true" _msttexthash="2224014" _msthash="2176">Countable/Countable.js at master · RadLikeWhoa/Countable</div>
    <div id="js-global-screen-reader-notice-assertive" class="sr-only mt-n1" aria-live="assertive" aria-atomic="true"></div>
  


<div class="sr-only mt-n1" id="screenReaderAnnouncementDiv" role="alert" data-testid="screenReaderAnnouncement" aria-live="assertive"></div></body></html>