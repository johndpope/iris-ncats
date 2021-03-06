from iris import state_types as t
from iris import IrisCommand
from app.user_functions.ncats.scripts.Q1_main import Q1_query
from iris import iris_objects
import os


class GeneSimilarity(IrisCommand):
    # what iris will call the command + how it will appear in a hint
    # title = "how does {condition} protects against {condition}?"
    title = "What genetic diseases are semantically similar to gene {gene}?"
    # give an example for iris to recognize the command

    examples = ["What diseases are similar to {gene}",
                "What diseases are related to {gene}",
                "Is {gene} related to disease",
                "How is the {gene} gene related to genetic diseases"]

    # type annotations for each command argument, to help Iris collect missing values from a user

    argument_types = {"gene": t.String("What is the gene do you want to analyze?")}

    # ,"genetic_disease":t.String("What is the genetic disease do you think it might link to? If unknown, type none")}

    # core logic of the command
    def command(self, gene):
        # Run the query
        results = Q1_query(gene)

        return [results, gene]


    # wrap the output of a command to display to user
    # by default this will be an identity function
    # each element of the list defines a separate chat bubble
    def explanation(self, result):

        """"# results is an object with       # Pandas data frame with top 10 resutls
        self.similarities = None
        # List of paths to word clouds
        self.commonality_clouds = []
        """
        [results, gene] = result
        # make the df_name:
        df_name = 'similarities_' + gene[:min(len(gene), 5)]
        # remove spaces and make lowercase
        df_name = df_name.replace(" ", "")
        df_name = df_name.lower()


        result_array = []
        if results.error is not None:
            result_array.append('There was an error processing your request')
            return result_array

        similarities = results.top_similarities()

        if similarities is None:
            result_array.append('No similarities could be computed')
        else:
            result_array.append('The following genetic diseases are the most semantically similar to %s' % gene)
            # adds the table to results
            similarities_df = iris_objects.IrisDataframe(data=similarities)
            self.iris.add_to_env(df_name, similarities_df)
            result_array.append(similarities_df)

        # display image (first one)
        # if len(results.commonality_clouds > 0):
        #    os.system("open " + results.commonality_clouds[0])


        return result_array


_GeneSimilarity = GeneSimilarity()