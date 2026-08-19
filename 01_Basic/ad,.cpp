class Solution {
public:
    using ll = long long;

    long long minCost(int m, int n, vector<vector<int>>& penalty) {

        const ll INF = (1LL << 60);

        vector<vector<array<ll,2>>> dist(
            m, vector<array<ll,2>>(n, {INF, INF})
        );

        using T = tuple<ll,int,int,int>;//
        priority_queue<T, vector<T>, greater<T>> pq; //

        dist[0][0][1] = 1;
        pq.push({1,0,0,1});

        int dx[4] = {-1,1,0,0};
        int dy[4] = {0,0,-1,1};

        while(!pq.empty()){
            auto [d,x,y,p] = pq.top();
            pq.pop();

            if(d != dist[x][y][p]) continue;

            int np = p ^ 1;

            // wait
            ll nd = d + penalty[x][y];
            if(nd < dist[x][y][np]){
                dist[x][y][np] = nd;
                pq.push({nd,x,y,np});
            }

            // moves
            for(int k=0;k<4;k++){
                int nx = x + dx[k];
                int ny = y + dy[k];

                if(nx<0 || nx>=m || ny<0 || ny>=n) continue;

                ll add = 1LL*(nx+1)*(ny+1);

                bool ok = false;

                if(p==1){ // odd
                    if((dx[k]==1 && dy[k]==0) || (dx[k]==0 && dy[k]==1))
                        ok = true;      // down or right
                }else{    // even
                    if((dx[k]==-1 && dy[k]==0) || (dx[k]==0 && dy[k]==-1))
                        ok = true;      // up or left
                }

                if(!ok) add += penalty[x][y];

                nd = d + add;

                if(nd < dist[nx][ny][np]){
                    dist[nx][ny][np] = nd;
                    pq.push({nd,nx,ny,np});
                }
            }
        }

        return min(dist[m-1][n-1][0], dist[m-1][n-1][1]);
    }
};



