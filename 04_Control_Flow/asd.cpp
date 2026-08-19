#include<iostream>
#include<vector>
#include<string>

class Solution {
public:
    int booth(const string &s) {
        int n = s.size();
        if (n == 0) return 0;

        string p = s + s;
        int i = 0, j = 1, k = 0;    
        while (i < n && j < n && k < n) {
            if (p[i + k] == p[j + k]) {
                k++;
            } else if (p[i + k] > p[j + k]) {
                i = i + k + 1;
                if (i <= j) i = j + 1;
                k = 0;
            } else {
                j = j + k + 1;
                if (j <= i) j = i + 1;
                k = 0;
            }
        }

        return min(i, j);
    }

    string cn(string s) {
        if (s.empty()) return "";

        int st = booth(s);
        return s.substr(st) + s.substr(0, st);
    }

    int minGroups(vector<string>& words) {

        unordered_set<string> sp;

        for (auto &w : words) {
            string ev, od;

            for (int i = 0; i < w.size(); i++) {
                if (i & 1)
                    od += w[i];
                else
                    ev += w[i];
            }

            string k = cn(ev) + "#" + cn(od);
            sp.insert(k);
        }

        return sp.size();
    }
};