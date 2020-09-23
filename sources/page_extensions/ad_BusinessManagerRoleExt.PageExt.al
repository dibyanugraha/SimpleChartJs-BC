pageextension 50000 "ad_BusinessManagerRoleExt" extends "Business Manager Role Center"
{
    layout
    {
        addafter(Control96)
        {
            part("Chart"; ad_ShowChartPart)
            {
                ApplicationArea = All;
            }
        }
    }
}