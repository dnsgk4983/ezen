# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""
def profit_calc(revenue, cost, tax, dividend):
    x = (revenue - cost) * (1 - tax) - dividend
    return x

def revenue_breakdown(revenue, chicken, pizza, sause):
    y = chicken / revenue
    z = pizza / revenue
    r = sause / revenue
    error_chk = (chicken + pizza + sause) / revenue
    return y, z, r, error_chk
