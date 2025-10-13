---
sidebar_position: 1
---

# Quick Start Guide

## Payment Solutions

SnapPay provides fast, easy and reliable credit card processing services for online payments. This guide gives the detailed information required to integrate with SnapPay payment processing solutions through the following avenues:

- **Hosted Payment Page**: Redirects user to SnapPay Hosted Payment Page. User fills out Credit
Card/Bank Account details. Upon submitting, SnapPay will process the payment and post the
result parameters back to calling system.
- **Account Number Tokenizer**: Tokenizes a credit card number. Used in conjunction with Secure
API(s) for payment execution.
- **Secure APIs**: Application uses Secure Payment APIs for more complex payment flows. Different
features and functions may be called depending on your application’s customizable payment
flows.

## Device Integrations

Additionally, SnapPay offers the following avenues for device/terminal integration:

- **Hosted Payment Page + Swipe**: Redirects user to SnapPay Hosted Payment Page. Card is
physically swiped for payment information. Upon submitting, SnapPay will process the payment
and post the result parameters back to calling system.
- **Account Number Tokenizer (Card not Present)**: For Call Centers with a SREDKey Device
ONLY. Tokenizes a credit card number using input from SREDKey. Used in conjunction with
Secure API(s) for payment execution.
- **Terminal Passthrough APIs**: Devices are configured to make API calls to SnapPay with Credit
Card information.

## APIs

- **Hosted Payment Page**: Redirects user to SnapPay Hosted Payment Page. User fills out Credit
Card/Bank Account details. Upon submitting, SnapPay will process the payment and post the
result parameters back to calling system. Used in conjunction with Secure API(s) for transaction
verification.
  - Get Request ID: `POST/api/interop/v2/GetRequestID`
  - Get Transaction: `POST/api/interop/GetTransaction`
- **Hosted Payment Page with Swipe**: Redirects user to SnapPay Hosted Payment Page. Card is
physically swiped for payment information. Upon submitting, SnapPay will process the payment
and post the result parameters back to calling system. Used in conjunction with Secure API(s) for
transaction verification.
  - Get Request ID: `POST/api/interop/v2/GetRequestID`
  - Get Transaction: `POST/api/interop/GetTransaction`
- **Account Number Tokenizer (Card Present)**: Tokenizes a credit card number. Used in
conjunction with Secure API(s) for payment execution.
  - Get Request ID: `POST/api/interop/v2/GetRequestID`
  - Charge: `POST/api/interop/v2/charge`
- **Account Number Tokenizer (Card Not Present)**: For Call Centers with a SREDKey 2 Device
ONLY. Tokenizes a credit card number using input from SREDKey 2. Used in conjunction with
Secure API(s) for payment execution.
  - Get Request `ID: POST/api/interop/v2/GetRequestID`
  - Charge: `POST/api/interop/v2/charge`
- **Secure APIs**: Application uses Secure Payment APIs for more complex payment flows. Different
features and functions may be called depending on your application’s customizable payment
flows.
  - Charge: `POST/api/interop/v2/charge`
  - Get Transaction: `POST/api/interop/GetTransaction`
  - Funding History: `GET/api/FundingHistory`
  - Transaction History: `GET/api/TransactionHistory`
  - Send Payment Link: `POST/api/interop/sendpaymentlink`
  - Tokenize: `POST/api/interop/tokenize`
- **Device (Terminal Passthrough)**: Terminal Passthrough API’s allow you to integrate secure
FDMS terminals into your application
  - Connect: `POST/P2PE/connect`
  - Read Card: `POST/P2PE/readCard`
  - Read manual: `POST/P2PE/readManual`
  - Disconnect: `POST/P2PE/disconnect`
  - Display: `POST/P2PE/display`
  - Clear Display: `POST/P2PE/clearDisplay`
  - Read signature: `POST/P2PE/readSignature`
  - Read confirmation: `POST/P2PE/readConfirmation`
  - Read input: `POST/P2PE/readInput`
  - List Terminals: `POST/P2PE/listTerminals`
  - Cancel: `POST/P2PE/cancel`