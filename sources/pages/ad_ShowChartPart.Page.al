page 50000 "ad_ShowChartPart"
{
    PageType = CardPart;
    Caption = 'Chart';

    layout
    {
        area(Content)
        {
            usercontrol("Chart"; ad_ChartJs)
            {
                ApplicationArea = All;
                trigger OnControlAddInReady()
                begin
                end;
            }
        }
    }
}