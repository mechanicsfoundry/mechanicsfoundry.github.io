var models = {

    cube: {

        vertexList: [[-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
                     [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1]],

        linesList: [[0, 1], [1, 2], [2, 3], [3, 0],
                    [4, 5], [5, 6], [6, 7], [7, 4],
                    [0, 4], [1, 5], [2, 6], [3, 7]]

    },

    octahedron: {

        vertexList: [[-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0],
                     [0, 0, -1.41], [0, 0, 1.41]],

        linesList: [[0, 1], [1, 2], [2, 3], [3, 0],
                    [0, 4], [1, 4], [2, 4], [3, 4],
                    [0, 5], [1, 5], [2, 5], [3, 5]]

    }

}