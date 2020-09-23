controladdin "ad_ChartJs"
{
    StartupScript = 'sources/scripts/start.js';
    Scripts =
        'sources/scripts/Chart.bundle.min.js';
    StyleSheets =
        'sources/scripts/Chart.min.css';

    RequestedHeight = 320;
    RequestedWidth = 300;
    MinimumHeight = 180;
    MinimumWidth = 200;
    VerticalShrink = true;
    HorizontalShrink = true;
    VerticalStretch = true;
    HorizontalStretch = true;

    event OnControlAddInReady();
}
