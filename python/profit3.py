# -*- coding: utf-8 -*-
"""
Created on Thu Feb 22 18:35:33 2024

@author: EZEN-14
"""

class revenue_func:
    
    def profit_calc(revenue, cost, tax, dividend):
        x = (revenue - cost) * (1 - tax) - dividend
        return x
    
    def revenue_breakdown(revenue, chicken, pizza, sause):
        y = chicken / revenue
        z = pizza / revenue
        r = sause / revenue
        error_chk = (chicken + pizza + sause) / revenue
        return y, z, r, error_chk