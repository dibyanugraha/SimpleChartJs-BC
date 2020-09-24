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

    actions
    {
        area(Processing)
        {
            action(SendCustomerData)
            {
                ApplicationArea = All;
                Image = SuggestVendorBills;
                Caption = 'Send Customer Data';

                trigger OnAction()
                var
                    cust: Record Customer;

                begin
                    cust.FindFirst();

                    CurrPage.Chart.SendDataToJS(cust."No.", cust.Name, cust.GetTotalAmountLCY());
                end;
            }
        }
    }
}