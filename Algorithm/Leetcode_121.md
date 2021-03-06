
## [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

**Problem :**

Say you have an array for which the *i*th element is the price of a given stock on day *i*.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

**Example 1:**

```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

```

**Example 2:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

**Example 3:**

```
Input: [2,4,1]
Output: 2
```

**Source Code 1:**

```java
public class Leetcode_121 {
    public int maxProfit(int[] prices) {

        int price = 0;
        int maxPrice = 0;
        int length = prices.length;

        for(int i=0;i<length;i++){
            for(int j=1;j<length;j++){

                price = prices[j]-prices[i];
                if(price>maxPrice && i<j){
                    maxPrice = price;
                }
            }
        }

        return maxPrice;
    }
}
```

**Experience 1:**

`2020.08.09` 이중포문으로 값을 구하는 것 말고는 생각이 나지 않는다...